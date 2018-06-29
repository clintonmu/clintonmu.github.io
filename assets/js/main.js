"use strict";


jQuery(document).ready(function ($) {

	$(window).load(function () {
		$(".loaded").fadeOut();
		$(".preloader").delay(1000).fadeOut("slow");
	});
    /*---------------------------------------------*
     * Mobile menu
     ---------------------------------------------*/
    $('#navbar-collapse').find('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 40)
                }, 1000);
                if ($('.navbar-toggle').css('display') != 'none') {
                    $(this).parents('.container').find(".navbar-toggle").trigger("click");
                }
                return false;
            }
        }
    });
    /*---------------------------------------------*
     * Banner heading 
     ---------------------------------------------*/

    (function($) {
    	  $.fn.countdown = function(options, callback) {
    	    //custom 'this' selector
    	    thisEl = $(this); 
    	  
    	    // array of custom settings
    	    var settings = { 
    	      'date': null,
    	      'format': null
    	    };

    	    // append the settings array to options
    	    if(options) {
    	      $.extend(settings, options);
    	    }
    	   
    	    //create the countdown processing function
    	    function countdown_proc() {
    	    var eventDate = Date.parse(settings.date) / 1000;
    	    var currentDate = Math.floor($.now() / 1000);
    	    
    	    if(eventDate <= currentDate) {
    	    callback.call(this);
    	    clearInterval(interval);
    	    }
    	      
    	    var seconds = eventDate - currentDate;
    	    
    	    var days = Math.floor(seconds / (60 * 60 * 24)); 
    	    //calculate the number of days
    	    
    	    seconds -= days * 60 * 60 * 24; 
    	    //update the seconds variable with number of days removed
    	    
    	    var hours = Math.floor(seconds / (60 * 60));
    	    seconds -= hours * 60 * 60; 
    	    //update the seconds variable with number of hours removed
    	    
    	    var minutes = Math.floor(seconds / 60);
    	    seconds -= minutes * 60; 
    	    //update the seconds variable with number of minutes removed
    	    
    	    //conditional statements
    	    if (days == 1) { thisEl.find(".timeRefDays").text("day"); } else { thisEl.find(".timeRefDays").text("days"); }
    			    if (hours == 1) { thisEl.find(".timeRefHours").text("hour"); } else { thisEl.find(".timeRefHours").text("hours"); }
    			    if (minutes == 1) { thisEl.find(".timeRefMinutes").text("minute"); } else { thisEl.find(".timeRefMinutes").text("minutes"); }
    			    if (seconds == 1) { thisEl.find(".timeRefSeconds").text("second"); } else { thisEl.find(".timeRefSeconds").text("seconds"); }
    	    
    	    //logic for the two_digits ON setting
    	    if(settings.format == "on") {
    	        days = (String(days).length >= 2) ? days : "0" + days;
    	        hours = (String(hours).length >= 2) ? hours : "0" + hours;
    	        minutes = (String(minutes).length >= 2) ? minutes : "0" + minutes;
    	        seconds = (String(seconds).length >= 2) ? seconds : "0" + seconds;
    	    }
    	    
    	    //update the countdown's html values.
    	    thisEl.find(".days").text(days);
    	    thisEl.find(".hours").text(hours);
    	    thisEl.find(".minutes").text(minutes);
    	    thisEl.find(".seconds").text(seconds);
    	  }

    		//run the function
    		countdown_proc();

    		//loop the function
    		interval = setInterval(countdown_proc, 1000);
    	  };

    	}) (jQuery);



    	//Provide the plugin settings
    	$("#countdown").countdown({
    	      //The countdown end date
    	      date: "1 January 2020 12:00:00",
    	      
    	      // on (03:07:52) | off (3:7:52) - two_digits set to ON maintains layout consistency
    	      format: "on"
    	      }, 
    	  
    	      function() {
    	      // This will run when the countdown ends
    	       alert("We're Out Now");
    	       });
    		   
    		   
    		 function setHeights() {
    	  var windowHeight = $(window).height();
    	  $('.slide').height(windowHeight);
    	}

    	setHeights();

    	$(window).resize(function() {
    	  setHeights();
    	});

    	function addSticky() {
    	  $('.slide').each(function() {
    	    var scrollerAnchor = $(this).offset().top;
    	    if (window.scrollY >= scrollerAnchor) {
    	      $(this).addClass('fix-it');
    	    } else {
    	      $(this).removeClass('fix-it');
    	    }
    	  });
    	}

    	$(window).scroll(function() {
    	  addSticky();
    	});  
    
    
    
    
    
    /*---------------------------------------------*
     * Portfolio Pop Up Animation
     ---------------------------------------------*/

    $('.portfolio-img').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    /*---------------------------------------------*
     * Menu Section
     ---------------------------------------------*/

    $('.cd-menu-trigger').on('click', function (event) {
        event.preventDefault();
        $('.home-main-content').addClass('move-out');
        $('#main-nav').addClass('is-visible');
        $('.cd-shadow-layer').addClass('is-visible');
    });
    //close menu
    $('.cd-close-menu').on('click', function (event) {
        event.preventDefault();
        $('.home-main-content').removeClass('move-out');
        $('#main-nav').removeClass('is-visible');
        $('.cd-shadow-layer').removeClass('is-visible');
    });

    //clipped image - blur effect
    set_clip_property();
    $(window).on('resize', function () {
        set_clip_property();
    });

    function set_clip_property() {
        var $header_height = $('.cd-header').height(),
                $window_height = $(window).height(),
                $header_top = $window_height - $header_height,
                $window_width = $(window).width();
        $('.cd-blurred-bg').css('clip', 'rect(' + $header_top + 'px, ' + $window_width + 'px, ' + $window_height + 'px, 0px)');
    }
    $('#main-nav a[href^="#"]').on('click', function (event) {
        event.preventDefault();
        var target = $(this.hash);
        $('.home-main-content').removeClass('move-out');
        $('#main-nav').removeClass('is-visible');
        $('.cd-shadow-layer').removeClass('is-visible');
        $('body,html').animate(
                {'scrollTop': target.offset().top},
        900
                );
    });


    /*---------------------------------------------*
     * STICKY scroll
     ---------------------------------------------*/

//    $.localScroll();



    /*---------------------------------------------*
     * Counter 
     ---------------------------------------------*/

//    $('.statistic-counter').counterUp({
//        delay: 10,
//        time: 2000
//    });




    /*---------------------------------------------*
     * WOW
     ---------------------------------------------*/

//        var wow = new WOW({
//            mobile: false // trigger animations on mobile devices (default is true)
//        });
//        wow.init();


    /* ---------------------------------------------------------------------
     Carousel
     ---------------------------------------------------------------------= */

//    $('.testimonials').owlCarousel({
//        responsiveClass: true,
//        autoplay: false,
//        items: 1,
//        loop: true,
//        dots: true,
//        autoplayHoverPause: true
//
//    });


    //End
});
