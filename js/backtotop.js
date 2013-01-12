$(window).scroll(function () {

	//Position Navigation Commands
	function whenScrolling(){
		var mymessage = $('#top_button');
		var scrollPos = $(window).scrollTop();
		if(scrollPos > 100){
			//$("#main-nav").addClass("fixed");
			mymessage.fadeIn('500');
		} else if(scrollPos < 100) {
			//$("#main-nav").removeClass("fixed");
			mymessage.fadeOut('100');
		}

	}
	whenScrolling();
	$(this).scroll(function () {
		whenScrolling();
	});

});