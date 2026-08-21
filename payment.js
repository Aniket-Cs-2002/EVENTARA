/* =====================================================
   PAYMENT METHODS
====================================================== */

const paymentButtons =
  document.querySelectorAll(".payment-method-button");

const paymentContents =
  document.querySelectorAll(".payment-content");

let selectedPayment = "upi";


paymentButtons.forEach((button) => {

  button.addEventListener("click", () => {

    const method = button.dataset.method;

    selectedPayment = method;


    /* CLOSE ALL PAYMENT METHODS */

    paymentButtons.forEach((item) => {

      item.classList.remove("selected");

      item.classList.remove("bg-[#F5E9FE]");

      item.classList.add("bg-white");

      const radio =
        item.querySelector(".payment-radio");

      if (radio) {
        radio.classList.remove("border-[#A437E6]");
        radio.classList.add("border-[#999999]");
      }

    });


    /* CLOSE ALL PAYMENT CONTENT */

    paymentContents.forEach((content) => {

      content.classList.add("hidden");
      content.classList.remove("block");

    });


    /* SELECT CURRENT PAYMENT METHOD */

    button.classList.add("selected");

    button.classList.remove("bg-white");

    button.classList.add("bg-[#F5E9FE]");


    const radio =
      button.querySelector(".payment-radio");

    if (radio) {

      radio.classList.remove("border-[#999999]");

      radio.classList.add("border-[#A437E6]");

    }


    /* FIND CONTENT */

    const content =
      document.querySelector(
        `[data-content="${method}"]`
      );


    /* WALLET CHEVRON */

    const chevron =
      button.querySelector(".wallet-chevron");


    if (chevron) {

      chevron.classList.toggle(
        "rotate-180",
        !!content
      );

    }


    /* OPEN CONTENT */

    if (content) {

      content.classList.remove("hidden");

      content.classList.add("block");

    }

  });

});


/* =====================================================
   WALLET SELECTION
====================================================== */

const walletOptions =
  document.querySelectorAll(".wallet-option");


walletOptions.forEach((wallet) => {

  wallet.addEventListener("click", () => {

    /* Reset all wallets */

    walletOptions.forEach((item) => {

      item.classList.remove(
        "bg-[#F5E9FE]"
      );

      item.classList.add(
        "bg-white"
      );


      const radio =
        item.querySelector(".wallet-radio");


      if (radio) {

        radio.classList.remove(
          "border-[5px]",
          "border-[#A437E6]"
        );

        radio.classList.add(
          "border-[2px]",
          "border-[#A8A8A8]"
        );

      }

    });


    /* Select clicked wallet */

    wallet.classList.remove(
      "bg-white"
    );

    wallet.classList.add(
      "bg-[#F5E9FE]"
    );


    const selectedRadio =
      wallet.querySelector(
        ".wallet-radio"
      );


    if (selectedRadio) {

      selectedRadio.classList.remove(
        "border-[2px]",
        "border-[#A8A8A8]"
      );

      selectedRadio.classList.add(
        "border-[5px]",
        "border-[#A437E6]"
      );

    }

  });

});


/* =====================================================
   WALLET BALANCE CHECKBOX
====================================================== */

const walletBalanceCheckbox =
  document.getElementById(
    "use-wallet-balance"
  );

const walletCheckboxVisual =
  document.querySelector(
    ".wallet-checkbox-visual"
  );


if (
  walletBalanceCheckbox &&
  walletCheckboxVisual
) {

  walletBalanceCheckbox.addEventListener(
    "change",
    () => {

      if (
        walletBalanceCheckbox.checked
      ) {

        walletCheckboxVisual.classList.remove(
          "bg-white",
          "border",
          "border-[#A437E6]"
        );

        walletCheckboxVisual.classList.add(
          "bg-[#A437E6]",
          "text-white"
        );

        walletCheckboxVisual.innerHTML =
          '<i class="fa-solid fa-check text-[12px]"></i>';

      } else {

        walletCheckboxVisual.classList.remove(
          "bg-[#A437E6]",
          "text-white"
        );

        walletCheckboxVisual.classList.add(
          "bg-white",
          "border",
          "border-[#A437E6]"
        );

        walletCheckboxVisual.innerHTML = "";

      }

    }
  );

}

/* =====================================================
   NETBANKING
====================================================== */

const bankOptions =
    document.querySelectorAll(".bank-option");

const bankSearch =
    document.getElementById("bank-search");

const netbankingPayButton =
    document.getElementById("netbanking-pay-button");


let selectedBank = "State Bank of India";


/* =====================================================
   BANK SELECTION
====================================================== */

bankOptions.forEach((bank) => {

    bank.addEventListener("click", () => {

        selectedBank =
            bank.dataset.bank || "";


        /* RESET ALL BANKS */

        bankOptions.forEach((item) => {

            item.classList.remove(
                "bg-[#F5E9FE]"
            );

            item.classList.add(
                "bg-white"
            );


            const radio =
                item.querySelector(
                    ".bank-radio"
                );


            if (radio) {

                radio.classList.remove(
                    "border-[5px]",
                    "border-[#A437E6]"
                );

                radio.classList.add(
                    "border-[2px]",
                    "border-[#A8A8A8]"
                );

            }

        });


        /* SELECT BANK */

        bank.classList.remove(
            "bg-white"
        );

        bank.classList.add(
            "bg-[#F5E9FE]"
        );


        const selectedRadio =
            bank.querySelector(
                ".bank-radio"
            );


        if (selectedRadio) {

            selectedRadio.classList.remove(
                "border-[2px]",
                "border-[#A8A8A8]"
            );

            selectedRadio.classList.add(
                "border-[5px]",
                "border-[#A437E6]"
            );

        }

    });

});


/* =====================================================
   BANK SEARCH
====================================================== */

if (bankSearch) {

    bankSearch.addEventListener(
        "input",
        () => {

            const value =
                bankSearch.value
                    .trim()
                    .toLowerCase();


            bankOptions.forEach(
                (bank) => {

                    const bankName =
                        (
                            bank.dataset.bank ||
                            ""
                        ).toLowerCase();


                    if (
                        bankName.includes(value)
                    ) {

                        bank.classList.remove(
                            "hidden"
                        );

                    } else {

                        bank.classList.add(
                            "hidden"
                        );

                    }

                }
            );

        }
    );

}


/* =====================================================
   NETBANKING PAYMENT
====================================================== */

if (netbankingPayButton) {

    netbankingPayButton.addEventListener(
        "click",
        () => {

            if (!selectedBank) {

                alert(
                    "Please select a bank."
                );

                return;

            }


            netbankingPayButton.disabled =
                true;


            netbankingPayButton.innerHTML = `
                <i class="fa-solid fa-spinner fa-spin"></i>
                REDIRECTING...
            `;


            setTimeout(
                () => {

                    netbankingPayButton.disabled =
                        false;


                    netbankingPayButton.innerHTML = `
                        <i class="fa-solid fa-lock text-[14px]"></i>
                        PROCEED TO PAY ₹5,470.90
                    `;

                },
                1500
            );

        }
    );

}

/* =====================================================
   GIFT CARD
====================================================== */

const giftButton =
  document.getElementById(
    "gift-card-button"
  );

const giftPanel =
  document.getElementById(
    "gift-card-panel"
  );

const giftApply =
  document.getElementById(
    "apply-gift-card"
  );

const giftInput =
  document.getElementById(
    "gift-card-input"
  );

const giftMessage =
  document.getElementById(
    "gift-card-message"
  );


if (
  giftButton &&
  giftPanel
) {

  giftButton.addEventListener(
    "click",
    () => {

      giftPanel.classList.toggle(
        "hidden"
      );

    }
  );

}


if (
  giftApply &&
  giftInput &&
  giftMessage
) {

  giftApply.addEventListener(
    "click",
    () => {

      const code =
        giftInput.value.trim();


      giftMessage.classList.remove(
        "hidden"
      );


      if (!code) {

        giftMessage.textContent =
          "Please enter a gift card code.";

        giftMessage.classList.remove(
          "text-[#3B906E]"
        );

        giftMessage.classList.add(
          "text-red-500"
        );

        return;

      }


      giftMessage.textContent =
        "Gift card code applied successfully.";

      giftMessage.classList.remove(
        "text-red-500"
      );

      giftMessage.classList.add(
        "text-[#3B906E]"
      );

    }
  );

}


/* =====================================================
   UPI PAYMENT MODAL
====================================================== */

const upiModal =
  document.getElementById(
    "upi-payment-modal"
  );

const upiBackButton =
  document.getElementById(
    "upi-back-button"
  );

const upiCountdown =
  document.getElementById(
    "upi-countdown"
  );


let upiTimer = null;

let upiSeconds = 120;


/* =====================================================
   OPEN UPI MODAL
====================================================== */

function openUpiModal() {

  if (
    !upiModal ||
    !upiCountdown
  ) {
    return;
  }


  clearInterval(
    upiTimer
  );

  upiSeconds = 120;


  upiCountdown.textContent =
    "Ends in 2:00";


  upiModal.classList.remove(
    "hidden"
  );

  upiModal.classList.add(
    "flex"
  );


  document.body.classList.add(
    "overflow-hidden"
  );


  upiTimer =
    setInterval(
      () => {

        upiSeconds--;


        const minutes =
          Math.floor(
            upiSeconds / 60
          );


        const seconds =
          String(
            upiSeconds % 60
          ).padStart(
            2,
            "0"
          );


        if (
          upiSeconds > 0
        ) {

          upiCountdown.textContent =
            `Ends in ${minutes}:${seconds}`;

        } else {

          upiCountdown.textContent =
            "Ends in 0:00";

          clearInterval(
            upiTimer
          );

        }

      },
      1000
    );

}


/* =====================================================
   CLOSE UPI MODAL
====================================================== */

function closeUpiModal() {

  if (!upiModal) {
    return;
  }


  clearInterval(
    upiTimer
  );


  upiModal.classList.add(
    "hidden"
  );

  upiModal.classList.remove(
    "flex"
  );


  document.body.classList.remove(
    "overflow-hidden"
  );

}


/* =====================================================
   BOOK TICKET
====================================================== */

const bookButton =
  document.getElementById(
    "book-ticket-button"
  );


if (bookButton) {

  bookButton.addEventListener(
    "click",
    () => {

      /* UPI */

      if (
        selectedPayment === "upi"
      ) {

        openUpiModal();

        return;

      }


      /* CHECK PAYMENT METHOD */

      if (!selectedPayment) {

        alert(
          "Please select a payment method."
        );

        return;

      }


      /* OTHER PAYMENT METHODS */

      bookButton.disabled =
        true;

      bookButton.textContent =
        "PROCESSING...";


      setTimeout(
        () => {

          bookButton.disabled =
            false;

          bookButton.textContent =
            "BOOK TICKET";

        },
        1200
      );

    }
  );

}


/* =====================================================
   BACK TO PAYMENT SCREEN
====================================================== */

if (upiBackButton) {

  upiBackButton.addEventListener(
    "click",
    closeUpiModal
  );

}


/* =====================================================
   CLICK OUTSIDE MODAL
====================================================== */

if (upiModal) {

  upiModal.addEventListener(
    "click",
    (event) => {

      if (
        event.target ===
        upiModal
      ) {

        closeUpiModal();

      }

    }
  );

}


/* =====================================================
   ESC KEY
====================================================== */

document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key === "Escape" &&
      upiModal &&
      !upiModal.classList.contains(
        "hidden"
      )
    ) {

      closeUpiModal();

    }

  }
);


/* =====================================================
   MOBILE NAVIGATION
====================================================== */

const mobileMenuButton =
  document.getElementById(
    "payment-mobile-menu-btn"
  );

const mobileMenu =
  document.getElementById(
    "payment-mobile-menu"
  );

const mobilePanel =
  document.getElementById(
    "payment-mobile-panel"
  );

const mobileClose =
  document.getElementById(
    "payment-mobile-close"
  );


function openMobileMenu() {

  if (
    !mobileMenu ||
    !mobilePanel
  ) {
    return;
  }


  mobileMenu.classList.remove(
    "hidden"
  );


  setTimeout(
    () => {

      mobilePanel.classList.remove(
        "-translate-x-full"
      );

    },
    10
  );

}


function closeMobileMenu() {

  if (
    !mobileMenu ||
    !mobilePanel
  ) {
    return;
  }


  mobilePanel.classList.add(
    "-translate-x-full"
  );


  setTimeout(
    () => {

      mobileMenu.classList.add(
        "hidden"
      );

    },
    300
  );

}


mobileMenuButton?.addEventListener(
  "click",
  openMobileMenu
);


mobileClose?.addEventListener(
  "click",
  closeMobileMenu
);


mobileMenu?.addEventListener(
  "click",
  (event) => {

    if (
      event.target ===
      mobileMenu
    ) {

      closeMobileMenu();

    }

  }
);