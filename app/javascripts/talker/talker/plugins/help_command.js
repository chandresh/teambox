Talker.HelpCommand = function() {
  var self = this;
  
  self.command = 'help';
  self.usage = '/help';
  
  self.onCommand = function(event) {
    if (event.command == "help") {
      var help_div = jQuery('<div/>').addClass('small');
      
      jQuery(help_div).append(jQuery('<h3/>').html("Help"));
      jQuery(help_div).append(jQuery('<p/>').html('If you need a hand with anything send us an <a href="mailto:help@talkerapp.com">email</a>.'));
      jQuery(help_div).append(jQuery('<br/>'))
      jQuery(help_div).append(jQuery('<h4/>').html("Available commands:"));
      _.each(Talker.getCommandsAndUsage(), function(cmd_usage) {
        jQuery(help_div).append(jQuery('<blockquote/>').css({'padding': '3px', 'font-size': 'small', 'font-family': 'monospace'}).html(cmd_usage[1]));
      });
      jQuery.facebox(help_div);
      
      Talker.getMessageBox().val('');
      return false;
    }
  }
}
