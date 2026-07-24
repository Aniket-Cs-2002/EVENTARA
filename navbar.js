$(document).ready(function () {
  const $mobileNavbar = $("#mobile-navbar");
  const $navbarSlide = $("#navbar-slide");

  // Open Mobile Menu
  $("#navbar-toggle").on("click", function () {
    $mobileNavbar.removeClass("hidden");

    // Allow browser to render before animating
    requestAnimationFrame(() => {
      $navbarSlide
        .removeClass("-translate-x-full")
        .addClass("translate-x-0");
    });
  });

  // Close Function
  function closeMobileMenu() {
    $navbarSlide
      .removeClass("translate-x-0")
      .addClass("-translate-x-full");

    setTimeout(() => {
      $mobileNavbar.addClass("hidden");
    }, 300);
  }

  // Close Button
  $("#navbar-close").on("click", function () {
    closeMobileMenu();
  });

  // Click Outside Drawer
  $mobileNavbar.on("click", function (e) {
    if ($(e.target).is("#mobile-navbar")) {
      closeMobileMenu();
    }
  });

  // Close after clicking any menu link
  $("#mobile-navbar a").on("click", function () {
    closeMobileMenu();
  });

  // Close on Escape key
  $(document).on("keydown", function (e) {
    if (e.key === "Escape" && !$mobileNavbar.hasClass("hidden")) {
      closeMobileMenu();
    }
  });
});

/* ===========================
   Category Slider
=========================== */

const categorySwiper = new Swiper(".categorySwiper", {
  slidesPerView: "auto",
  spaceBetween: 16,
  centerInsufficientSlides: true,
  freeMode: true,
  grabCursor: true,
});

/* ===========================
   Featured Event Slider
=========================== */

const featuredEventSlider = new Swiper(".featured-event-slider", {
  slidesPerView: "auto",
  spaceBetween: 20,
  freeMode: true,
  grabCursor: true,
  watchOverflow: true,
});