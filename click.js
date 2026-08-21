/* ==========================================
   FEATURED EVENT CARD REDIRECT
========================================== */

document.addEventListener("click", function (event) {

    // Find the Featured Event card that was clicked
    const card = event.target.closest(
        ".featured-event-slider .swiper-slide"
    );

    // Not a Featured Event card
    if (!card) {
        return;
    }

    // Keep Swiper controls working
    if (
        event.target.closest(
            ".swiper-button-next, .swiper-button-prev, .swiper-pagination, button"
        )
    ) {
        return;
    }

    // Stop any existing link inside the card
    const link = event.target.closest("a");

    if (link) {
        event.preventDefault();
    }

    // Go to Event Details
    window.location.href = "./event-details.html";

});