jQuery(function() {
  // Hide sidebar
  jQuery('#sidebar .toggle_sidebar').click(function(e) {
    jQuery('#sidebar #room, #sidebar #utilities, #sidebar .logo').toggle();
    jQuery('#main, #message_form, #sidebar .toggle_sidebar').toggleClass('expanded');
    Talker.trigger("Resize");
  });
  jQuery('#message_form .form_help').click(function(e) {
    // This may need some refactoring, duplication with app/javascripts/talker/plugins/help_command.js
    var help_div = jQuery('<div/>').addClass('small');
    jQuery(help_div).append(jQuery('<h3/>').html("Help"));
    jQuery(help_div).append(jQuery('<p/>').html('If you need a hand with anything send us an <a href="mailto:help@talkerapp.com">email</a>.'));
    jQuery(help_div).append(jQuery('<br/>'))
    jQuery(help_div).append(jQuery('<h4/>').html("Available commands:"));
    _.each(Talker.getCommandsAndUsage(), function(cmd_usage) {
      jQuery(help_div).append(jQuery('<blockquote/>').css({'padding': '3px', 'font-size': 'small', 'font-family': 'monospace'}).html(cmd_usage[1]));
    });
    jQuery.facebox(help_div);
  });

  // Room name dropdown
  jQuery('#rooms_controller.show #room_name').click(function(e) {
    jQuery('#rooms').toggle();
    jQuery(this).find('span.switch_rooms').toggleClass('hide_rooms').toggleClass('show_rooms');
    e.stopPropagation();
  });
  
  jQuery(document).click(function(e){
    jQuery('#rooms_controller.show #rooms').hide();
    jQuery('#rooms_controller.show #room span.switch_rooms').removeClass('show_rooms').addClass('hide_rooms');
  });
  
  // File Upload
  if (jQuery('#upload')[0]){
    new AjaxUpload('#upload', {
      action: jQuery('a#upload').attr('href'),
      name: 'upload',
      responseType: 'json',
      onComplete: function(file, response) {
        jQuery("#upload").show();
        jQuery("#upload_loader").hide();
        if (response.error) {
          alert("Error uploading file: " + response.error);
        } else {
          Talker.sendMessage(response.url);
        }
      },
      onSubmit: function() {
        if (jQuery.browser.safari){
          jQuery.get("/close_connection", {async: false});
        }
        jQuery("#upload").hide();
        jQuery("#upload_loader").show();
      }
    });
  }
  
  jQuery("div#guest_access a").
    live("click", function() {
      var link = jQuery(this);
      link.hide();
      jQuery("#guest_access_loader").show();
      jQuery.post(this.href, function() {
        if (link.hasClass("enable"))
          var action = "enabled";
        else
          var action = "disabled";
        Talker.sendAction(action + " guest access", {update:true});
      });
      return false;
    });
  
  jQuery("input#guest_url").live("click", function() {
    this.select();
  });
});