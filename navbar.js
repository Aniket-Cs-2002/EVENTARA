$(document).ready(function () {

  const $mobileNavbar = $("#mobile-navbar");
  const $navbarSlide = $("#navbar-slide");



  /* ===========================
   SEARCH OVERLAY
=========================== */

const $searchOverlay = $("#search-overlay");
const $searchInput = $("#navbar-search-input");

function openSearchOverlay() {
  $searchOverlay
    .removeClass("hidden")
    .addClass("flex");

  requestAnimationFrame(() => {
    $searchInput.trigger("focus");
  });
}

function closeSearchOverlay() {
  $searchOverlay
    .removeClass("flex")
    .addClass("hidden");
}


/* Open Search */

$(document).on("click", "#navbar-search-btn", function (e) {

  e.stopPropagation();

  openSearchOverlay();

});


/* Close when clicking outside */

$(document).on("click", "#search-overlay", function (e) {

  if ($(e.target).is("#search-overlay")) {

    closeSearchOverlay();

  }

});


/* Close with Escape */

$(document).on("keydown", function (e) {

  if (
    e.key === "Escape" &&
    !$searchOverlay.hasClass("hidden")
  ) {

    closeSearchOverlay();

  }

});


  /* ===========================
     PROFILE DROPDOWN
  =========================== */

  const $profileDropdown = $("#profile-dropdown");


  function closeProfileDropdown() {

    $profileDropdown
      .addClass(
        "opacity-0 invisible pointer-events-none translate-y-[-8px] scale-[0.98]"
      )
      .removeClass(
        "opacity-100 visible pointer-events-auto translate-y-0 scale-100"
      );

    $("#profile-dropdown-btn").attr(
      "aria-expanded",
      "false"
    );

  }


  // Profile Button
  $(document).on(
    "click",
    "#profile-dropdown-btn",
    function (e) {

      e.stopPropagation();

      const isOpen =
        $profileDropdown.hasClass("visible");


      if (isOpen) {

        closeProfileDropdown();

      } else {

        $profileDropdown
          .removeClass(
            "opacity-0 invisible pointer-events-none translate-y-[-8px] scale-[0.98]"
          )
          .addClass(
            "opacity-100 visible pointer-events-auto translate-y-0 scale-100"
          );

        $(this).attr(
          "aria-expanded",
          "true"
        );

      }

    }
  );


  // Click Outside
  $(document).on("click", function (e) {

    if (
      !$(e.target)
        .closest("#profile-dropdown-wrapper")
        .length
    ) {

      closeProfileDropdown();

    }

  });


  // Escape
  $(document).on("keydown", function (e) {

    if (e.key === "Escape") {

      closeProfileDropdown();

    }

  });


  // Open Mobile Menu
  $("#navbar-toggle").on("click", function () {

    $mobileNavbar.removeClass("hidden");

    requestAnimationFrame(() => {

      $navbarSlide
        .removeClass("-translate-x-full")
        .addClass("translate-x-0");

    });

  });


  // Close Mobile Menu
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


  // Close after clicking menu link
  $("#mobile-navbar a").on("click", function () {

    closeMobileMenu();

  });


  // Escape Mobile Menu
  $(document).on("keydown", function (e) {

    if (
      e.key === "Escape" &&
      !$mobileNavbar.hasClass("hidden")
    ) {

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



/* ===========================
   NAVBAR AUTH BUTTONS
=========================== */

// Navbar Login
$(document).on("click", "#navbar-login-btn", function () {

    $("#auth-modal").addClass("active");

    $("#login-tab").trigger("click");

});


// Navbar Sign Up
$(document).on("click", "#navbar-signup-btn", function () {

    $("#auth-modal").addClass("active");

    $("#signup-tab").trigger("click");

});



