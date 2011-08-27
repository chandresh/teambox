Threads = {

  // Moves the thread up or down, or paginates if we reached
  // the end of the activity feed and there's a Show More button
  //
  // Return false if there are no threads
  move: function(direction) {
    // No threads
    if (!jQuery('.thread').length) { return false; }

    // Get first selected thread, or else the first thread
    var sel = jQuery('.thread.selected:first');
    sel.length || (sel = jQuery('.thread:first'));

    // Call prevAll or nextAll depending on the direction
    var next = sel[direction+'All']('.thread:first');

    if (sel.length && next.length) {
      Threads.select(next);
      Threads.ensureVisible(next);
    } else if (!next.length && direction == 'next') {
      var btn = jQuery('#activity_paginate_link')
      if (btn.length && btn.is(":visible")) {
        console.log("implement fetch more comments");
        //btn.fire('pseudo:click')
      }
    }

    return true;
  },
  select: function(element) {
    jQuery('.thread.selected').removeClass('selected');
    jQuery(element).addClass('selected');
  },
  ensureVisible: function(element) {
    var target_position = jQuery(element).position().top - 10;
    jQuery(".content_scroll").scrollTop(target_position);
  },
  toggleSelected: function() {
    ActivityFeed.toggle(jQuery('.thread.selected'));
  }
}

jQuery(function() {

  jQuery(document)
    .bind('keydown', 'j', function() { Threads.move("next"); })
    .bind('keydown', 'k', function() { Threads.move("prev"); })
    .bind('keydown', 'down', function(e) {
      Threads.move("next") && e.preventDefault();
    })
    .bind('keydown', 'up', function(e) {
      Threads.move("prev") && e.preventDefault();
    })
    .bind('keydown', 'enter', function() { Threads.toggleSelected(); })

});
