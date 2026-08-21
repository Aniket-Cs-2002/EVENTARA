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


  // Open Search

  $(document).on(
    "click",
    "#navbar-search-btn",
    function (e) {

      e.stopPropagation();

      openSearchOverlay();

    }
  );


  // Close Search Outside

  $(document).on(
    "click",
    "#search-overlay",
    function (e) {

      if ($(e.target).is("#search-overlay")) {

        closeSearchOverlay();

      }

    }
  );


  // Close Search with Escape

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


  // Click Outside Profile

  $(document).on("click", function (e) {

    if (
      !$(e.target)
        .closest("#profile-dropdown-wrapper")
        .length
    ) {

      closeProfileDropdown();

    }

  });


  // Escape Profile

  $(document).on("keydown", function (e) {

    if (e.key === "Escape") {

      closeProfileDropdown();

    }

  });


  /* ===========================
     MOBILE NAVBAR
  =========================== */

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

  /* ===========================
   CHANGE PASSWORD MODAL
=========================== */

const $changePasswordModal =
  $("#change-password-modal");

const $changePasswordBackBtn =
  $("#change-password-back-btn");

const $changePasswordConfirmBtn =
  $("#change-password-confirm-btn");


function openChangePasswordModal() {

  $changePasswordModal
    .removeClass("hidden")
    .addClass("flex");

}


function closeChangePasswordModal() {

  $changePasswordModal
    .removeClass("flex")
    .addClass("hidden");

}


/* OPEN */

$(document).on(
  "click",
  "#change-password-btn, #mobile-change-password-btn",
  function (e) {

    e.preventDefault();
    e.stopPropagation();

    closeProfileDropdown();
    closeMobileMenu();

    openChangePasswordModal();

  }
);


/* BACK BUTTON */

$changePasswordBackBtn.on(
  "click",
  function () {

    closeChangePasswordModal();

  }
);


/* CLICK OUTSIDE */

$changePasswordModal.on(
  "click",
  function (e) {

    if (
      $(e.target).is(
        "#change-password-modal"
      )
    ) {

      closeChangePasswordModal();

    }

  }
);


/* CONFIRM */

$changePasswordConfirmBtn.on(
  "click",
  function () {

    const newPassword =
      $("#change-password-new")
        .val()
        .trim();

    const confirmPassword =
      $("#change-password-confirm")
        .val()
        .trim();


    if (
      !newPassword ||
      !confirmPassword
    ) {

      alert(
        "Please enter both passwords."
      );

      return;

    }


    if (
      newPassword !== confirmPassword
    ) {

      alert(
        "Passwords do not match."
      );

      return;

    }


    // Password is valid

    closeChangePasswordModal();

  }
);


/* ESCAPE */

$(document).on(
  "keydown",
  function (e) {

    if (
      e.key === "Escape" &&
      !$changePasswordModal.hasClass(
        "hidden"
      )
    ) {

      closeChangePasswordModal();

    }

  }
);


  /* ===========================
     LOGOUT CONFIRMATION MODAL
  =========================== */

  const $logoutModal =
    $("#logout-modal");

  const $logoutBackBtn =
    $("#logout-back-btn");

  const $logoutNoBtn =
    $("#logout-no-btn");

  const $logoutYesBtn =
    $("#logout-yes-btn");


  // Open Logout Modal

  function openLogoutModal() {

    $logoutModal
      .removeClass("hidden")
      .addClass("flex");

  }


  // Close Logout Modal

  function closeLogoutModal() {

    $logoutModal
      .removeClass("flex")
      .addClass("hidden");

  }


  // Desktop + Mobile Logout

  $(document).on(
    "click",
    "#logout-btn, #mobile-logout-btn",
    function (e) {

      e.preventDefault();

      e.stopPropagation();


      // Close profile dropdown

      closeProfileDropdown();


      // Close mobile menu

      closeMobileMenu();


      // Open logout confirmation

      openLogoutModal();

    }
  );


  // NO

  $logoutNoBtn.on(
    "click",
    function () {

      closeLogoutModal();

    }
  );


  // BACK

  $logoutBackBtn.on(
    "click",
    function () {

      closeLogoutModal();

    }
  );


  // YES

  $logoutYesBtn.on(
    "click",
    function () {

      /*
       * For now:
       * Close the modal only.
       * Stay on the same page.
       */

      closeLogoutModal();

    }
  );


  // Click outside modal

  $logoutModal.on(
    "click",
    function (e) {

      if (
        $(e.target).is("#logout-modal")
      ) {

        closeLogoutModal();

      }

    }
  );


  // Escape Logout Modal

  $(document).on(
    "keydown",
    function (e) {

      if (
        e.key === "Escape" &&
        !$logoutModal.hasClass("hidden")
      ) {

        closeLogoutModal();

      }

    }
  );

});


/* ===========================
   CATEGORY SLIDER
=========================== */

const categorySwiper = new Swiper(
  ".categorySwiper",
  {
    slidesPerView: "auto",
    spaceBetween: 16,
    centerInsufficientSlides: true,
    freeMode: true,
    grabCursor: true,
  }
);


/* ===========================
   FEATURED EVENT SLIDER
=========================== */

const featuredEventSlider = new Swiper(
  ".featured-event-slider",
  {
    slidesPerView: "auto",
    spaceBetween: 20,
    freeMode: true,
    grabCursor: true,
    watchOverflow: true,
  }
);


/* ===========================
   NAVBAR AUTH BUTTONS
=========================== */


// Navbar Login

$(document).on(
  "click",
  "#navbar-login-btn",
  function () {

    $("#auth-modal")
      .addClass("active");

    $("#login-tab")
      .trigger("click");

  }
);


// Navbar Sign Up

$(document).on(
  "click",
  "#navbar-signup-btn",
  function () {

    $("#auth-modal")
      .addClass("active");

    $("#signup-tab")
      .trigger("click");

  }
);