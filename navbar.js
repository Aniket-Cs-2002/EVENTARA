$(document).ready(function () {
  $("#navbar-toggle").click(function () {
    $("#mobile-navbar").toggleClass("hidden");
    $("#navbar-slide").toggleClass("-translate-x-full");
    $("#navbar-slide").toggleClass("translate-x-0");
  });
 
  $("#mobile-navbar").click(function (e) {
    if ($(e.target).is("#mobile-navbar")) {
      $("#mobile-navbar").addClass("hidden");
      $("#navbar-slide")
        .removeClass("translate-x-0")
        .addClass("-translate-x-full");
    }
  });
});


 const categorySwiper = new Swiper('.categorySwiper', {
  slidesPerView: 'auto',
  spaceBetween: 16,
  centerInsufficientSlides: true,
  freeMode: true,
  grabCursor: true,
});
 
 
 
 
const featuredEventSlider = new Swiper(".featured-event-slider", {
  slidesPerView: "auto",
  spaceBetween: 20,
  grabCursor: true,
  freeMode: true,
});
