$('a[href^="#"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});

$("#projectchi").on("click", function(){
	$(".chicago-desc").fadeToggle(1000);
})

$("#projectgame").on("click", function(){
	$(".game-desc").fadeToggle(1000);
})

$("#projectondeck").on("click", function(){
	$(".ondeck-desc").fadeToggle(1000);
})

$("#projectdeath").on("click", function(){
	$(".death-desc").fadeToggle(1000);
})

