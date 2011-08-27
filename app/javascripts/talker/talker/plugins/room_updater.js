Talker.RoomUpdater = function(url) {
  var self = this;
  
  self.onLoaded = function() {
    self.onMessageReceived = function(event) {
      if (event.update) {
        jQuery.getScript(url);
      }
    };
  };
};