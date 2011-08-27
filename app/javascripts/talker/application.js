//= require "jquery"
//= require "underscore"
//= require "talker"

jQuery(function() {
  
  jQuery("div.flash").click(function() {
    jQuery(this).remove();
    return false;
  });
  
  if (jQuery("#invitees")[0]) {
    window.setTimeout(function(){ jQuery('#invitees').focus(); }, 10);
  }
  /*
  if (jQuery.cookie("browser_warn") != 1 && (jQuery.browser.msie && jQuery.browser.version[0] < 7) || jQuery.browser.opera) {
    jQuery.cookie("browser_warn", 1);
    jQuery.facebox("<h3>Talker is not supported in this browser.</h3>"+
              "<p>It's possible (and probable) that you'll experience various issues using Talker with this browser.</p>"+
              "<p>Please report any problem to our <a href='http://talker.tenderapp.com/'>support site</a>.</p>");
  }
  */

});
console.log("jquery.cookie is ", typeof jQuery.cookie);
