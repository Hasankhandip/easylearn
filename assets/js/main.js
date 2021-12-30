// header-section js start
$(window).on("scroll", function(){
    if ($(this).scrollTop() > 50 ) {
      $(".header-bottom").addClass("active");
    } else {
      $(".header-bottom").removeClass("active");
    }
  });
// header-section js end

// cousre-load js start
$(document).ready(function(){
  $(".course-content").slice(0, 6).show();
  $("#loadMore").on("click", function(e){
    e.preventDefault();
    $(".course-content:hidden").slice(0, 3).slideDown();
    if($(".course-content:hidden").length == 0) {
      $("#loadMore").addClass("noContent");
    }
  });
  
})
// cousre-load js end

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
});
// slick slider end