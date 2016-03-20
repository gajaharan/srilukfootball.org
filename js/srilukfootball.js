
var isDisplay = false;
$(document).ready(function() {

	$('.carousel').carousel({
	    interval: 3000
	});

	if (!isDisplay) {
		if ($('.redirect-backdrop').length) { 
		    $('.redirect-backdrop')
		        .velocity("stop")
		        .velocity("transition.fadeIn", 0);
		    $('body').addClass('noscroll');
		    isDisplay = true;  
		}

	}


    $('.redirect-backdrop').on('click', function(){
        $(this)
            .velocity("stop")
            .velocity("transition.fadeOut", 1000);  
        $('body').removeClass('noscroll');          
    }); 

    var startLine = 0;

	if ($('#startLine').length) { 
		startLine = $('#startLine').offset().top - 100;
	} else if ($('#top-container').length) {
		startLine = $('#top-container').offset().top - 100;
	}

	$(document).scroll(function(){
	    if($(this).scrollTop() > startLine) {   
	        $('.navbar-default').css({"background-color":"#fff"});
	    } else {
	        $('.navbar-default').css({"background-color": "rgba(255, 255, 255, 0.8)"});
	    }
	});       
});



//var windowHeight = $(window).height();
//var navBarHeight = $(".navbar").height();
//var imageHeight = windowHeight - navBarHeight;
//var h = $(".carousel-inner").height() * 0.01;


//$(".content-container").css("min-height", windowHeight);


window.onresize = function(event) {
    
    /*var w = window.innerWidth;
    if (w < 1200) {
        var carouselImg = $(".carousel-inner").height() - h;
        console.log(carouselImg);
        $(".carousel-inner").css("height", carouselImg);
    }*/
    
    //var carouselImg = $(".carousel-inner").height();
    
    //console.log(w);
    //$(".carousel-inner").css("height", carouselImg);
    
};