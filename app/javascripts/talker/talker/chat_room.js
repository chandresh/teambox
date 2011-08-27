function focusMsgBox() {
  var msgbox = jQuery('#msgbox')[0];
  if (msgbox){
    jQuery('#msgbox').setCaretPosition(-1);
    msgbox.focus();
    return true;
  }
  return false;
};

jQuery(function() {
  jQuery('#send').click(function(e) {
    if (jQuery('#msgbox').val().length){
      Talker.trigger("MessageSend", {type:"message", content: jQuery("#msgbox").val()});
    }
    e.preventDefault();
  });
  jQuery('#msgbox')
    .keydown(function(e){
      switch (e.which){
        case 33:
        case 34:
          break;
        case 13: // enter
          if (e.shiftKey) return; // line break
          if (this.value == '') return false; // ignore empty messages
          
          // we actually have a message
          Talker.trigger("MessageSend", {type:"message", content: jQuery("#msgbox").val()});
          return false;
          break;
          
        case 27: // esc
          jQuery('#msgbox').focus().val('');
          jQuery(document).trigger('close.facebox');
          break;
      }
    });
  
  jQuery(window).keydown(function(e){
    switch (e.which){
      case 224: // Cmd in FF
      case 91:  // Cmd in Safari
      case 67:  // Cmd+c Ctrl+c
      case 17:  // Ctrl
      case 33:  // PageUp 
      case 34:  // PageDown
        break;
      case 13:  // enter
        if (focusMsgBox()){
          e.preventDefault();
        }
        break;
      default:
        focusMsgBox();
        break;
    }
  });
  
  jQuery('#msgbox, input.search, #edit_room form input, #edit_room form textarea').keydown(function(e){
    if (e.which == 33 || e.which == 34){
      return;
    } else {
      e.stopPropagation();
    }
  });
  
  jQuery(window).resize(function(){ Talker.trigger('Resize') });
  
  Talker.trigger('Resize');
});
