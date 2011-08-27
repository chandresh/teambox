class User

  attr_accessible :show_badges

  def badges
    settings['badges'] || []
  end

  def grant_badge(badge)
    write_setting 'badges',
      badges.push(badge).uniq
  end

  def show_badges
    !!settings['show_badges']
  end

  def show_badges=(v)
    self.settings = { 'show_badges' => v == "1" }
  end

end
