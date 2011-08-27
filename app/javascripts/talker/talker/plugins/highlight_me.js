Talker.HighlightMe = function(){
  var plugin = this;
  
  plugin.onMessageInsertion = function(event) {
    var me = new RegExp("\\b" + Talker.currentUser.name + "\\b", 'gi');
    
    var blocks = jQuery("blockquote").each(function(){
      if (jQuery(this).html().replace(/<\/?[^>]+>/gi, ' ').match(me)) {
        jQuery(this).css({
          '-moz-box-shadow': '0 0 10px yellow',
          '-webkit-box-shadow': '0 0 10px yellow',
          'box-shadow': '0 0 10px yellow'
        });
      }
    });
  }
}