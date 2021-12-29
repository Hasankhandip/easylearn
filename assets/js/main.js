// header-section js start
$(window).on("scroll", function(){
    if ($(this).scrollTop() > 50 ) {
      $(".header-bottom").addClass("active");
    } else {
      $(".header-bottom").removeClass("active");
    }
  });
// header-section js end