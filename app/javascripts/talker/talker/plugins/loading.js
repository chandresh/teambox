// Hide loading message once we're connected.
Talker.Loading = function() {
  var plugin = this;
  
  plugin.onConnected = function(event) {
    jQuery("#curtain, #loading").fadeOut("normal", function() { jQuery(this).remove() });
  };
};