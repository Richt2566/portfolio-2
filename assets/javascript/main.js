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
	$(".chicago-desc").fadeToggle(800);
})

$("#projectgame").on("click", function(){
	$(".game-desc").fadeToggle(800);
})

$("#projectondeck").on("click", function(){
	$(".ondeck-desc").fadeToggle(800);
})

$("#projectdeath").on("click", function(){
	$(".death-desc").fadeToggle(800);
})

