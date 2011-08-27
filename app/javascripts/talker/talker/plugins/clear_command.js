Talker.ClearCommand = function() {
  var self = this;
  
  self.command = 'clear';
  self.usage = '/clear';

  self.onCommand = function(event){
    if (event.command == 'clear') {
      Talker.insertNotice({user: {name: ''}, content: 'Last clear occured at this point.'});
      while(jQuery('#log tr').length > 1) {
        jQuery('#log tr:first').remove();
      }
      Talker.getMessageBox().val('');
      return false;
    }
  }
}