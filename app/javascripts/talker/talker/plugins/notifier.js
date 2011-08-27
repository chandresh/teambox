Talker.Notifier = function(){
  var self = this;
  
  var dom_element, on_focus, on_blur;
  
  if (jQuery.browser.mozilla) {
    dom_element = document, on_focus = "focus", on_blur = "blur";
  } else if (jQuery.browser.msie) {
    dom_element = document, on_focus = "focusin", on_blur = "focusout";
  } else { // safari and others
    dom_element = window, on_focus = "focus", on_blur = "blur";
  }
  

  jQuery(dom_element)
    .bind(on_focus, function(e){
      Talker.trigger("Focus");
    })
    .bind(on_blur, function(){ 
      Talker.trigger("Blur");
    });
}