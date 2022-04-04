/***************************************************

==================== JS INDEX ======================

****************************************************

01. Sticky Header Js

02. Info Bar Js

03. Mobile Menu Js

04.  img fancybox js

05. Album macy js

06. Scroll To Top Js

07. Testimonial Slider 2 Js

08. PreLoader Js





****************************************************/


(function ($) {

  "use strict";
  
     // 03. Sticky Header Js

     $(window).on('scroll', function () {

      var scroll = $(window).scrollTop();
  
      if (scroll < 100) {
  
        $("#sticky").removeClass("sticky");
  
      } else {
  
        $("#sticky").addClass("sticky");
  
      }
  
    });
  
 
	////////////////////////////////////////////////////

   
 

  	////////////////////////////////////////////////////

    

   
  // onle time slider| 
   
$('.slider-two').slick({
  dots: true,
  infinite: true,
  speed: 400,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true, 
  autoplayTimeout: 4500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});   
var masonry = new Macy({
  container: '#macy',
  trueOrder: false,
  waitForImages: false,
  useOwnImageLoader: false,
  debug: true,
  mobileFirst: true,
  columns: 1,
  margin: {
      y: 16,
      x: '2%',
  },
  breakAt: {
      1200: 6,
      940: 5,
      520: 3,
      400: 2
  },
});

// fayncy box

var containerEl = document.querySelector('.vdo');

var containerEl = document.querySelector('.gallaxy');

// back to top button
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
// -----------
$('.container').imagesLoaded()
  .always( function( instance ) {
    console.log('all images loaded');
  })
  .done( function( instance ) {
    console.log('all images successfully loaded');
  })
  .fail( function() {
    console.log('all images loaded, at least one is broken');
  })
  .progress( function( instance, image ) {
    var result = image.isLoaded ? 'loaded' : 'broken';
    console.log( 'image is ' + result + ' for ' + image.img.src );
  });



jQuery('.scroll').onePgaeNav({
  wrapper : '#onepage-nav'
});

// preloader
 var loader = document.getElementById("preloader");

 window.addEventListener("load", function(){
   loader.style.display = "none";
 })
// ----------end

})(jQuery);