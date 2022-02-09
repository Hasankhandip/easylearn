"use strict";
// preloader start
$(window).on("load", function () {
  $(".preloader")
    .delay(500)
    .animate(
      {
        opacity: "0",
      },
      500,
      function () {
        $(".preloader").css("display", "none");
      }
    );
});
// wow.js start
new WOW().init();
// header-section js start
$(window).on("scroll", function(){
    if ($(this).scrollTop() > 50 ) {
      $(".header-bottom").addClass("active");
    } else {
      $(".header-bottom").removeClass("active");
    }
  });
// odometer js start
(function() {
  $(".overview-counter-up").each(function () {
      $(this).isInViewport(function(status) {
          if (status === "entered") {
              for( var i=0; i < document.querySelectorAll(".odometer").length; i++ ){
                  var el = document.querySelectorAll('.odometer')[i];
                  el.innerHTML = el.getAttribute("data-odometer-final");
              }
          }
      });
  });
})();
 // slick slider start
 $(document).ready(function(){
  $('.testimonial-area').slick({
    autoplay:true,
    prevArrow: ".left-arrow-testimonial",
    nextArrow:  ".right-arrow-testimonial",
    slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        dots:true,
      }
    }
  ]
  });
  $('.sponsor-item-area').slick({
    autoplay:true,
    slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 2,
      }
    }
  ]
  });
});
// progressbar js start
$(document).ready(function () {
  var progressPath = document.querySelector('.progress-wrap path');
  var pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
  progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
  var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength / height);
      progressPath.style.strokeDashoffset = progress;
  }
  updateProgress();
  $(window).scroll(updateProgress);
  var offset = 150;
  var duration = 550;
  jQuery(window).on('scroll', function () {
      if (jQuery(this).scrollTop() > offset) {
          jQuery('.progress-wrap').addClass('active-progress');
      } else {
          jQuery('.progress-wrap').removeClass('active-progress');
      }
  });
  jQuery('.progress-wrap').on('click', function (event) {
      event.preventDefault();
      jQuery('html, body').animate({ scrollTop: 0 }, duration);
      return false;
  })
});
//  sponsor-img js start
$('.sponsor-img').each(function(){
  var sponsorImgSrc = $(this).data('src');
  $(this).append(`
    <img class="front-img" src="${sponsorImgSrc}" alt="image">
    <img class="back-img" src="${sponsorImgSrc}" alt="image">
  `);
});
// course-details-coupon-form js start
$(".course-details-coupon-title").on("click",function(){
  $(".course-details-coupon-form").addClass("active");
});
// magnific popup js start
$(document).ready(function() {
  $('.course-content-view').magnificPopup(
    {type:'iframe'}
    );
    $('.course-play-btn').magnificPopup(
      {type:'iframe'}
      );
});
// header-navbar js start
$('.navbar-toggler').on('click', function(){
  $('.header-navbar').addClass('show');
});
$('.sidebar-close-btn').on('click', function(){
  $('.header-navbar').removeClass('show');
});
// filter-btn js start
$('.filter-btn').on('click', function(){
  $('.course-list-filter-wrap').addClass('show');
});
$('.filter-close-btn').on('click', function(){
  $('.course-list-filter-wrap').removeClass('show');
});
// grid-list-btn js start
$('.list-btn').on('click', function(){
  $('.course-area-wrapper-2').addClass('active');
  $('.course-area-wrapper').addClass('off');
  $(this).addClass('active');
  $('.grid-btn').removeClass('active');
});
$('.grid-btn').on('click', function(){
  $('.course-area-wrapper-2').removeClass('active');
  $('.course-area-wrapper').removeClass('off');
  $(this).addClass('active');
  $('.list-btn').removeClass('active');
});
// header-navbar js start
$('.category-nav-link').on('click', function(){
  $('.category-navbar').addClass('active');
});
$('.category-close-btn').on('click', function(){
  $('.category-navbar').removeClass('active');
});
// password-view-btn js start
$('.la-eye').on('click', function(){
  $(this).addClass('remove');
  $('.la-eye-slash').addClass('active');
});
$('.la-eye-slash').on('click', function(){
  $(this).removeClass('active');
  $('.la-eye').removeClass('remove');
});