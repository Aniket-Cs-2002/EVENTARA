
    /* =========================================================
       CLOSE PAGE
    ========================================================= */

    const closeConfirmation =
      document.getElementById("close-confirmation");

    if (closeConfirmation) {

      closeConfirmation.addEventListener("click", () => {

        window.location.href = "index.html";

      });

    }


    /* =========================================================
       COPY BOOKING ID
    ========================================================= */

    const copyBookingId =
      document.getElementById("copy-booking-id");

    const bookingId =
      document.getElementById("booking-id");

    if (copyBookingId && bookingId) {

      copyBookingId.addEventListener("click", async () => {

        try {

          await navigator.clipboard.writeText(
            bookingId.textContent.trim()
          );

          const icon =
            copyBookingId.querySelector("i");

          icon.className =
            "fa-solid fa-check text-[17px] text-[#3CC27D]";

          setTimeout(() => {

            icon.className =
              "fa-regular fa-copy text-[17px]";

          }, 1500);

        } catch (error) {

          console.error(
            "Unable to copy booking ID:",
            error
          );

        }

      });

    }


    /* =========================================================
       DOWNLOAD TICKET
    ========================================================= */

    function downloadTicket() {

      window.print();

    }