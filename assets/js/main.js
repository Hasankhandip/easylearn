// header-section js start
$(window).on("scroll", function(){
    if ($(this).scrollTop() > 50 ) {
      $(".header-bottom").addClass("active");
    } else {
      $(".header-bottom").removeClass("active");
    }
  });
// header-section js end


// odometer js start
$(".count").counterUp({
  delay: 10,
  time: 1000,
});
// odometer js end

 // slick slider start
 $(document).ready(function(){
  $('.testimonial-area').slick({
    prevArrow: ".left-arrow-testimonial",
    nextArrow:  ".right-arrow-testimonial",
    slidesToShow: 1,
  slidesToScroll: 1
  });
  $('.sponsor-item-area').slick({
    autoplay:true,
    slidesToShow: 6,
  slidesToScroll: 1,
  });
});
// slick slider end

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
// progressbar js end

//  sponsor-img js start
$('.sponsor-img').each(function(){
  var sponsorImgSrc = $(this).data('src');
  $(this).append(`
    <img class="front-img" src="${sponsorImgSrc}" alt="image">
    <img class="back-img" src="${sponsorImgSrc}" alt="image">
  `);
});
//  sponsor-img js end