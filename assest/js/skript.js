(function($){
"use strict";
 
    // css section 
    // image hight section ?
    var blog_img_height = $(".blog-single-img img").height();
    var content_height = $(".blog-text");
    content_height.css("height",blog_img_height);

    // search-button-section-start 
var searchbtn = $(".search-btn a.fa");

    searchbtn.on("click",function(){
        $(this).toggleClass("fa-close");
        var close = $("fa-close");
        if(close){
            $(".search-box").toggleClass("ve");
            $(this).toggleClass("fa-search");
        }
    });
    // search-button-section-end
 // fixed nav 

$(window).scroll(function() {
    var topspeacing = $(window).scrollTop();
    if(topspeacing >100){
        $(".logo-and-manu-area").addClass("sticky");
    }else{
        $(".logo-and-manu-area").removeClass("sticky");
    }
});
// fotter to top

// var tops = $(window).scrollTop();
// $('.top').click(function(){
// $(window).scrollTop(0);
// });

$('.top').click(function(){ 
        $('html,body').animate({ scrollTop: 0 }, 40100);
        return false; 
    });

// movile manu

var windoww = $(window).width();
if (windoww <= 767){
    $(".main-manu-area").append('<a href="#" class="mobile-manu  fa fa-bars"></a>');
    $(".main-manu-area > .mobile-manu-class ").append('<a href="#" class="mobile-manu-close fa fa-times"></a>');
};

var manu_click = $(".mobile-manu");
var ul_click =$(".main-manu-area ul li a");
var close = $(".mobile-manu-close");
// manu_click
manu_click.click(function(event){
 event.preventDefault();
 $(".mobile-manu-class").css("left",0+"px");
});
// ul_click
ul_click.click(function(event){
 event.preventDefault();
 $(".mobile-manu-class").css("left",200+"%");
});
// close click 
close.click(function(event){
 event.preventDefault();
 $(".mobile-manu-class").css("left",200+"%");
});

// mobile manu end

    // owl carosel
    // header slider
    $(".slide-num-one-section").owlCarousel({
        items: 1,
        loop: true,
    });
    // idea slide
    $(".idea-slide").owlCarousel({
        items: 1,
        loop: true,
    });
    // integration img slide
     $(".int-slide-one").owlCarousel({
        items: 5,
        loop: true,
        autoplay:true,
        autoplaySpeed:9000,
        autoplayTimeout:1000,
         responsive:{
           
         400:{
                items:3,
            },
            768:{
            items:5,
           },
         }
    });

     $(".int-slide-two").owlCarousel({
        items: 5,
        loop: true,
        autoplay:true,
        autoplayTimeout:1000,
        autoplaySpeed:9000,
         responsive:{
            400:{
                items:3,
            },
            768:{
            items:5,
           },
         }
    });

    $(".owl-loaded ").addClass("owl-carousel");

    // counter up

    $('.counter').counterUp({
        delay: 50,
        time: 1000,  
    });
    // counter down

    // require('jquery-countdown');
    $('#getting-started').countdown('2017/09/17', function(event) {
        $(this).html(event.strftime('%w weeks %d days %H:%M:%S'));
    });

    // onepage nav

    $('#sidr').onePageNav({
        currentClass: 'activ',
    });
     // mobile manu
      
  



})(jQuery);