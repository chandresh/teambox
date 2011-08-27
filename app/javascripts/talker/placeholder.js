// Simulate HTML5 placeholder attribute behaviour
jQuery(function() {
  if (!jQuery.browser.safari) {
    jQuery("input[type=text], input[type=search]").
      focus(function() { 
        if (jQuery(this).attr('placeholder') && jQuery(this).val() == jQuery(this).attr('placeholder')) {
          jQuery(this).val('').removeClass("placeholder");
        }
      }).
      blur(function() {
        if (jQuery(this).attr('placeholder') && (jQuery(this).val() == '' || jQuery(this).val() == jQuery(this).attr('placeholder'))) {
          jQuery(this).addClass("placeholder").val(jQuery(this).attr('placeholder'));
        } 
      }).
      trigger("blur");
  }
});