class NotificationsObserver < ActiveRecord::Observer

  observe :comment, :activity


  method_name = %w(cucumber test).any? {|env| Rails.env == env} ? :after_create : :after_commit

  define_method(method_name) do |obj|
    return if method_name == :after_commit && !obj.send(:transaction_include_action?, :create)
    return if obj.try(:project).try(:is_importing)

    case obj
      when Activity
        push_on_create(obj) unless Rails.env == 'test'
        notify_watchers_on_new_activity(obj)
      when Comment
        notify_watchers_on_new_comment(obj)
    end
  end

  protected

    def push_on_create(activity)

      #TODO: Also send none project-related activities
      if activity.project && !activity.is_first_comment? && activity.push?
        activity_hash = activity.to_push_data(:rabl_assigns => {:push_session_id => User.current.push_session_id})

        users = User.select_auth_tokens activity.project.users

        #Publish activities to:
        # * project users
        # * organization admins if project/person activity
        # * activity user if person activity
        if %w(Project Person).include? activity.target_type
          users = users.concat User.select_auth_tokens activity.project.organization.admins
          if activity.target_type == 'Person'
            users << activity.target.user.to_auth_token
          end
        end

        users.uniq.each do |user|
          Juggernaut.publish("/users/#{user[0]}", activity_hash.to_json)
        end
      end
    end

    def notify_watchers_on_new_activity(activity)
      watchers = case activity.target_type
      when 'Page' then activity.target.people_watching
      when 'Note' then activity.target.page.people_watching
      else return
      end

      watchers.each do |person|
        next if person.user == activity.user

        user = person.user
        if user.notify_pages
          notification = person.notifications.new(:target => activity, :user => user)

          if person.digest_type == :instant
            Emailer.send_with_language(:notify_activity, user.locale, user.id, activity.project_id, activity.id)
            notification.sent = true
          elsif person.digest_type != :none
            person.update_next_delivery_time!
          end

          notification.read = true
          notification.save
        end
      end
    end



    def notify_watchers_on_new_comment(comment)
      return unless %w(Conversation Task).any? {|target_type| comment.target_type == target_type}

      target = comment.target

      target.people_watching.each do |person|
        next if person.user == comment.user
        user = person.user
        if user.send("notify_#{target.class.to_s.downcase.pluralize}".to_sym)
          notification = person.notifications.new(:comment => comment, :target => target, :user => user)

          if !target.is_private and (person.digest_type == :instant or (comment.mentioned.to_a.include? user and user.instant_notification_on_mention?))
            instant_delivery(target, comment, user)
            notification.sent = true
          elsif person.digest_type != :none
            person.update_next_delivery_time!
          end

          # Set all the notification as read until we have a nice UI for it
          # Todo, remove once we have a UI for it
          notification.read = true

          notification.save
        end
      end
    end

    def instant_delivery(target, comment, user)
      Emailer.send_with_language("notify_#{target.class.to_s.downcase}".to_sym, user.locale, user.id, comment.project.id, target.id)
    end
end
