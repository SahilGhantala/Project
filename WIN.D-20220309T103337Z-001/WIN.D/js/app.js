/* Theme Name: Kivox - Responsive Landing Page Template
   Author: Themesdesign
   Version: 1.0.0
   File Description: Main Js file of the template
*/

! function($) {
    "use strict";

    var KivoxApp = function() {};

    KivoxApp.prototype.initStickyMenu = function() {
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 50) {
                $(".sticky").addClass("nav-sticky");
            } else {
                $(".sticky").removeClass("nav-sticky");
            }
        });
    },
    
    KivoxApp.prototype.initSmoothLink = function() {
         $('.navbar-nav a,.mouse_down a').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    },

    KivoxApp.prototype.initScrollspy = function() {
        $("#navbarCollapse").scrollspy({ offset: 70 });
    },

    KivoxApp.prototype.initTestiMonial = function() {
         $("#owl-demo").owlCarousel({
            autoPlay: 3000,
            stopOnHover: true,
            navigation: false,
            paginationSpeed: 1000,
            goToFirstSpeed: 2000,
            singleItem: true,
            autoHeight: true,
        });
    },

    

    KivoxApp.prototype.initTestiMonial = function() {
         $("#owl-demo").owlCarousel({
            autoPlay: 3000,
            stopOnHover: true,
            navigation: false,
            paginationSpeed: 1000,
            goToFirstSpeed: 2000,
            singleItem: true,
            autoHeight: true,
        });
    },

    KivoxApp.prototype.initMfpVideo = function() {
        $('.video-play-icon').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    },

    KivoxApp.prototype.initBacktoTop = function() {
        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.back-to-top').fadeIn();
            } else {
                $('.back-to-top').fadeOut();
            }
        }); 
        $('.back-to-top').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 1000);
            return false;
        });
    },

     KivoxApp.prototype.inittyped = function() {

    $(".element").each(function() {
    var $this = $(this);
    $this.typed({
        strings: $this.attr('data-elements').split(','),
        typeSpeed: 100, // typing speed
        backDelay: 3000 // pause before backspacing
    });
});
 },

    KivoxApp.prototype.initContact = function() {
         $('#contact-form').submit(function() {

            var action = $(this).attr('action');

            $("#message").slideUp(750, function() {
                $('#message').hide();

                $('#submit')
                    .before('<img src="images/ajax-loader.gif" class="contact-loader" />')
                    .attr('disabled', 'disabled');

                $.post(action, {
                        name: $('#name').val(),
                        email: $('#email').val(),
                        comments: $('#comments').val(),
                    },
                    function(data) {
                        document.getElementById('message').innerHTML = data;
                        $('#message').slideDown('slow');
                        $('#cform img.contact-loader').fadeOut('slow', function() {
                            $(this).remove()
                        });
                        $('#submit').removeAttr('disabled');
                        if (data.match('success') != null) $('#cform').slideUp('slow');
                    }
                );

            });

            return false;

        });
    },

    
    KivoxApp.prototype.init = function() {
        this.initStickyMenu();
        this.initSmoothLink();
        this.initScrollspy();
        this.initTestiMonial();
        this.initMfpVideo();
          this.inittyped();
        this.initContact();
    },
    //init
    $.KivoxApp = new KivoxApp, $.KivoxApp.Constructor = KivoxApp
}(window.jQuery),

//initializing
function($) {
    "use strict";
    $.KivoxApp.init();
}(window.jQuery);


/* Theme Name: Yearia - Responsive Landing Page Template
   Author: Themesdesign
   Version: 1.0.0
   File Description: Main JS file of the template
*/


(function ($) {

    'use strict';


//portfolio filter 
$(window).on('load', function() {
    // Filter 
    //PORTFOLIO FILTER 
    var $container = $('.projects-wrapper');
    var $filter = $('#filter');
    // Initialize isotope 
    $container.isotope({
        filter: '*',
        layoutMode: 'masonry',
        animationOptions: {
            duration: 750,
            easing: 'linear'
        }
    });
    // Filter items when filter link is clicked
    $filter.find('a').click(function() {
        var selector = $(this).attr('data-filter');
        $filter.find('a').removeClass('active');
        $(this).addClass('active');
        $container.isotope({
            filter: selector,
            animationOptions: {
                animationDuration: 750,
                easing: 'linear',
                queue: false,
            }
        });
        return false;
    });

});

$('.mfp-image').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'mfp-fade',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1]
            // Will preload 0 - before current, and 1 after the current image 
    }
});




})(jQuery);