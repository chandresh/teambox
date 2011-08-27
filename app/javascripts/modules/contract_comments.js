// Call this function to contract comments to a max height

contractComments = function(max_height) {

  max_height = max_height || 500;

  jQuery('.comment').each(function(i,comment) {
    comment = jQuery(comment);
    if (comment.find(".expand_comment").length) { return; }
    if (comment.height() > max_height) {
      comment.find(".block").append(Templates.comments.expand_comment);
      comment.find(".block .body").css({
        "height": max_height+"px",
        "overflow-y": "hidden"
      });
    }
  });

};

jQuery(".expand_comment").live("click", function(e) {
  e.preventDefault();
  var el = jQuery(e.currentTarget);
  el.parents(".comment").find(".body").css({ "height": "auto" });
  el.remove();
});
