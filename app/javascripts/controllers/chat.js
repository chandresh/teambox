load_room = function() {
  // Work with noConflict mode
  var $ = jQuery;

  Talker.currentUser = {"name":"micho","id":2554,"color":"#ffe2bf","email":"pablo@teambox.com"};
  Talker.room = {"name":"Barcelona","id":819};
  Talker.log = $('#log');

  // In order for this to work, the app must be running in:
  //   http://something.com
  // and the following must be CNAMEd to talkerapp.com. The subdomain chosen doesn't really matter.
  //   http://talker.something.com
  // Port and protocol must match, too.

  document.domain = document.domain;
  Orbited.settings.hostname = 'talker.teambox.dev';
  Orbited.settings.port = 80;
  Orbited.settings.protocol = 'http'
  Orbited.settings.streaming = true;
  TCPSocket = Orbited.TCPSocket;

  document.domain = document.domain;

  Talker.plugins.push(
    // Functional plugins that have bearing on wether other plugins work or not
    new Talker.Pending(), // updates pending status of messages when a new message is received from the server.
    new Talker.ErrorHandler($("#error")),
    new Talker.Loading(),
    new Talker.Users(), // used only to keep track of which users are present for up to date knowledge of presence
    new Talker.LogSweeper($("#log")),
    //new Talker.Scroller(),
    new Talker.Notifier(), //provides onblur/onfocus handlers
    new Talker.UserList($('#people')), // sidebar updating of users.
/*
    new Talker.RoomUpdater('/rooms/819/refresh'), // update room info
    new Talker.Timestamp(),// << depends on order to be included properly.  I say it should remain mandatory for usability reasons.
    new Talker.HighlightMe(),
    new Talker.ReceivedSound(),
    // Account plugins
    //   new Talker.Plugin_3()),

    // Plugins that will always be loaded...
    new Talker.InviteCommand({invites_url: '/invites'}),
    new Talker.MeCommand(), 
    new Talker.MsgCommand(),
    new Talker.CommandAutocompleter(),
    new Talker.UsernameAutocompleter(),

    // Formatters to provide basic functionalities
    new Talker.FeedFormatter(),
    new Talker.YoutubeFormatter(),
    new Talker.PasteFormatter(),
    new Talker.ImageFormatter(),

    new Talker.Sender($("#msgbox")),
    new Talker.HelpCommand(),
    new Talker.ClearCommand(),
    new Talker.DefaultCommand($('msgbox')),
    */
    // this is mandatory and should be last.
    new Talker.DefaultFormatter()
  );

  Talker.client = new Talker.Client({
    host: 'localhost', 
    port: 8600, 
    room: Talker.room.id,
    lastEventId: '84c94620b24d012e505b12313d01ccc7',
    token: "ea275113713187301a1f520c5772658f4cf617c6",
    callbacks: Talker.Broadcaster
  }).connect();

  $.each([{"time":1314381466,"id":"d3dabb70b23a012e50da12313d01ccc7","type":"message","content":"wait jordi","user":{"name":"karl.goldfield","id":3687,"email":"karl.goldfield@teambox.com"}},{"time":1314381468,"id":"d5006d10b23a012e50da12313d01ccc7","type":"message","content":"one more thing","user":{"name":"karl.goldfield","id":3687,"email":"karl.goldfield@teambox.com"}},{"time":1314381470,"id":"d67491e0b23a012e50da12313d01ccc7","type":"message","content":"[/rtroll]","user":{"name":"jamesu","id":2657,"email":"jamesu@gmail.com"}},{"time":1314381483,"id":"de5dd600b23a012e50da12313d01ccc7","type":"message","content":"neat","user":{"name":"jamesu","id":2657,"email":"jamesu@gmail.com"}},{"time":1314381497,"id":"e6495a70b23a012e50da12313d01ccc7","type":"message","content":"This is from Salesforce","user":{"name":"karl.goldfield","id":3687,"email":"karl.goldfield@teambox.com"}},{"time":1314381498,"id":"e6eb7a90b23a012e50da12313d01ccc7","type":"message","content":"http://www.slideshare.net/Salesforce/the-social-sales-revolution","user":{"name":"karl.goldfield","id":3687,"email":"karl.goldfield@teambox.com"}},{"time":1314381498,"id":"e710ee30b23a012e505b12313d01ccc7","type":"leave","user":{"name":"jordi","id":3221,"email":"jordi@jrom.net"}},{"time":1314381498,"id":"e76d1110b23a012e50da12313d01ccc7","type":"message","content":"Oh okay, she told me PC Mag...AWESOME","user":{"name":"josh_1","id":6216,"email":"josh@teambox.com"}},{"time":1314381508,"id":"ed378ce0b23a012e50da12313d01ccc7","type":"message","content":"It will not crash your computer","user":{"name":"karl.goldfield","id":3687,"email":"karl.goldfield@teambox.com"}},{"time":1314381568,"id":"112939a0b23b012e505b12313d01ccc7","type":"join","user":{"name":"smoku","id":2949,"email":"pawel.smoczyk@netguru.pl"}},{"time":1314381633,"id":"37a6c5a0b23b012e505b12313d01ccc7","type":"leave","user":{"name":"tokland","id":7131,"email":"tokland@gmail.com"}},{"time":1314384157,"id":"184c89f0b241012e505b12313d01ccc7","type":"leave","user":{"name":"smoku","id":2949,"email":"pawel.smoczyk@netguru.pl"}},{"time":1314384287,"id":"656182c0b241012e50e512313d01ccc7","type":"message","content":"Charles Barbier pushed \"Google contact are unreliable, check for nil on every level\" -  https://github.com/teambox/Teambox-hosted/commit/ec5c4ab0e46b4c68eb2dcb5db3e9f73f0f7a873b to [Teambox-hosted/hosted]","user":{"name":"Teambot","id":5915,"color":"#ffd9fb","email":"jordi+teambot@teambox.com"}},{"time":1314384968,"id":"fb869600b242012e505b12313d01ccc7","type":"join","user":{"name":"victor_gzlez","id":5599,"email":"victor@teambox.com"}},{"time":1314385009,"id":"1413a440b243012e50da12313d01ccc7","type":"message","content":"@victor_gzlez Did you see the eBook?","user":{"name":"karl.goldfield","id":3687,"email":"karl.goldfield@teambox.com"}},{"time":1314385091,"id":"44ddf6c0b243012e50da12313d01ccc7","type":"message","content":"hey @karl.goldfield How it's going?","user":{"name":"victor_gzlez","id":5599,"email":"victor@teambox.com"}},{"time":1314385095,"id":"473bbf20b243012e50da12313d01ccc7","type":"message","content":"not yet","user":{"name":"victor_gzlez","id":5599,"email":"victor@teambox.com"}},{"time":1314385117,"id":"540eae20b243012e50da12313d01ccc7","type":"message","content":"http://www.slideshare.net/Salesforce/the-social-sales-revolution","user":{"name":"karl.goldfield","id":3687,"email":"karl.goldfield@teambox.com"}},{"time":1314385139,"id":"612ea0e0b243012e50da12313d01ccc7","type":"message","content":"It does not mention Teambox, BUT they list me as VP of Sales at Teambox when I present on Wed","user":{"name":"karl.goldfield","id":3687,"email":"karl.goldfield@teambox.com"}},{"time":1314385139,"id":"6162c250b243012e50da12313d01ccc7","type":"message","content":":)","user":{"name":"karl.goldfield","id":3687,"email":"karl.goldfield@teambox.com"}},{"time":1314385182,"id":"7ae99920b243012e50da12313d01ccc7","type":"message","content":"sound great!","user":{"name":"victor_gzlez","id":5599,"email":"victor@teambox.com"}},{"time":1314385284,"id":"b7f65eb0b243012e505b12313d01ccc7","type":"leave","user":{"name":"victor_gzlez","id":5599,"email":"victor@teambox.com"}},{"time":1314385551,"id":"56dfd3a0b244012e505b12313d01ccc7","type":"join","user":{"name":"victor_gzlez","id":5599,"email":"victor@teambox.com"}},{"time":1314385634,"id":"88a367c0b244012e50da12313d01ccc7","type":"message","content":"@karl.goldfield Sorry Karl, low battery. I was trying to say that we should organiza us to get buzz about your presentation in DF 11","user":{"name":"victor_gzlez","id":5599,"email":"victor@teambox.com"}},{"time":1314385654,"id":"94160d10b244012e50e512313d01ccc7","type":"message","content":"Charles Barbier pushed \"add ActiveRecord alternative for non-mysql database to watcher uniqueness index\" -  https://github.com/teambox/teambox/commit/b7125303cc7d66496606f31a0c86a63d3b28de14 to [teambox/dev]","user":{"name":"Teambot","id":5915,"color":"#ffd9fb","email":"jordi+teambot@teambox.com"}},{"time":1314385677,"id":"a1d88670b244012e50da12313d01ccc7","type":"message","content":"send me if u want photos or something like that and I'll post using hashtags....in TW, FB....","user":{"name":"victor_gzlez","id":5599,"email":"victor@teambox.com"}},{"time":1314385692,"id":"ab297aa0b244012e50da12313d01ccc7","type":"message","content":"we can get buzz during DF","user":{"name":"victor_gzlez","id":5599,"email":"victor@teambox.com"}},{"time":1314385711,"id":"b6494bd0b244012e50da12313d01ccc7","type":"message","content":"yes","user":{"name":"karl.goldfield","id":3687,"email":"karl.goldfield@teambox.com"}},{"time":1314385715,"id":"b8b6a310b244012e50da12313d01ccc7","type":"message","content":"i will tweet too","user":{"name":"karl.goldfield","id":3687,"email":"karl.goldfield@teambox.com"}},{"time":1314385729,"id":"c12b46a0b244012e50da12313d01ccc7","type":"message","content":"I am starting a post tonight about my new adventure into salesforce universe","user":{"name":"karl.goldfield","id":3687,"email":"karl.goldfield@teambox.com"}},{"time":1314385745,"id":"cadb8540b244012e50da12313d01ccc7","type":"message","content":"all related to the social enterprise and procial network","user":{"name":"karl.goldfield","id":3687,"email":"karl.goldfield@teambox.com"}},{"time":1314385750,"id":"cd4c1690b244012e50da12313d01ccc7","type":"message","content":"on my blogs","user":{"name":"karl.goldfield","id":3687,"email":"karl.goldfield@teambox.com"}},{"time":1314385756,"id":"d0f7bd10b244012e50da12313d01ccc7","type":"message","content":"and then tie it to tb blogs","user":{"name":"karl.goldfield","id":3687,"email":"karl.goldfield@teambox.com"}},{"time":1314385819,"id":"f66b3720b244012e50da12313d01ccc7","type":"message","content":"ok perfect. Try to get some photos wehn you'll be there I'll tweet from @teambox_app","user":{"name":"victor_gzlez","id":5599,"email":"victor@teambox.com"}},{"time":1314385838,"id":"01c19400b245012e50da12313d01ccc7","type":"message","content":"when it will be exaclty?","user":{"name":"victor_gzlez","id":5599,"email":"victor@teambox.com"}},{"time":1314385839,"id":"0281cd80b245012e50da12313d01ccc7","type":"message","content":"ok i will do a tweet pic assault","user":{"name":"karl.goldfield","id":3687,"email":"karl.goldfield@teambox.com"}},{"time":1314385843,"id":"05345b00b245012e50da12313d01ccc7","type":"message","content":"tuesday-friday","user":{"name":"karl.goldfield","id":3687,"email":"karl.goldfield@teambox.com"}},{"time":1314385858,"id":"0dd79690b245012e50da12313d01ccc7","type":"message","content":"#df11 is the hashtag","user":{"name":"karl.goldfield","id":3687,"email":"karl.goldfield@teambox.com"}},{"time":1314386008,"id":"673cbdf0b245012e50da12313d01ccc7","type":"message","content":"ok cool, ping me and I'll focus on it","user":{"name":"victor_gzlez","id":5599,"email":"victor@teambox.com"}},{"time":1314386104,"id":"a0697310b245012e50da12313d01ccc7","type":"message","content":"BTW: Congrats for next review! Looks great","user":{"name":"victor_gzlez","id":5599,"email":"victor@teambox.com"}},{"time":1314386727,"id":"13bf5930b247012e505b12313d01ccc7","type":"leave","user":{"name":"victor_gzlez","id":5599,"email":"victor@teambox.com"}},{"time":1314386975,"id":"a7792e20b247012e505b12313d01ccc7","type":"leave","user":{"name":"karl.goldfield","id":3687,"email":"karl.goldfield@teambox.com"}},{"time":1314387024,"id":"c4aa3250b247012e505b12313d01ccc7","type":"join","user":{"name":"micho","id":2554,"email":"pablo@teambox.com"}},{"time":1314387628,"id":"2d21e580b249012e505b12313d01ccc7","type":"leave","user":{"name":"micho","id":2554,"email":"pablo@teambox.com"}},{"time":1314387920,"id":"dad61960b249012e505b12313d01ccc7","type":"join","user":{"name":"karl.goldfield","id":3687,"email":"karl.goldfield@teambox.com"}},{"time":1314388011,"id":"117cef20b24a012e505b12313d01ccc7","type":"leave","user":{"name":"karl.goldfield","id":3687,"email":"karl.goldfield@teambox.com"}},{"time":1314388059,"id":"2e1bc560b24a012e505b12313d01ccc7","type":"join","user":{"name":"micho","id":2554,"email":"pablo@teambox.com"}},{"time":1314389229,"id":"e714af10b24c012e505b12313d01ccc7","type":"leave","user":{"name":"josh_1","id":6216,"email":"josh@teambox.com"}},{"time":1314389364,"id":"37b3b140b24d012e505b12313d01ccc7","type":"leave","user":{"name":"kwojtaszek","id":7004,"email":"kwojtaszek@creativelabs.pl"}},{"time":1314389493,"id":"84c94620b24d012e505b12313d01ccc7","type":"join","user":{"name":"josh_1","id":6216,"email":"josh@teambox.com"}}], function(){ Talker.Broadcaster.broadcastEvent(this); });

  Talker.trigger("Loaded");
  Talker.trigger("Resize");

  jQuery(window).bind('beforeunload', function() { Talker.client.reset() });

  if(navigator.platform.match(/iP(?:[ao]d|hone)/)) {
    $("#message_form").css('position', 'static').addClass('ios');
  }

};



(function () {

  var ChatController = { routes: { '!/chat' : 'room_show' } }
    , Views = Teambox.Views
    , Controllers = Teambox.Controllers
    , views = Teambox.views;











  ChatController.room_show = function () {
    Views.Sidebar.highlightSidebar('chat_link');
    $('content').update(Templates.chat.sidebar + Templates.chat.main);
    load_room();
  };

  // exports
  Teambox.Controllers.ChatController = Teambox.Controllers.BaseController.extend(ChatController);

}());


