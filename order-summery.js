/* =====================================================
         OFFERS
      ====================================================== */

      document.querySelectorAll(".offer-row").forEach((row) => {
        row.addEventListener("click", () => {
          const type = row.dataset.offer;

          const panel = document.getElementById(`${type}-offers-panel`);

          if (!panel) return;

          const isOpen = panel.classList.toggle("open");

          row.classList.toggle("open", isOpen);
        });
      });

      /* =====================================================
         PAYMENT DETAILS
      ====================================================== */

      document.querySelectorAll(".payment-label-button").forEach((button) => {
        button.addEventListener("click", () => {
          const type = button.dataset.payment;

          const panel = document.getElementById(`${type}-panel`);

          if (!panel) return;

          const isOpen = panel.classList.toggle("open");

          button.classList.toggle("open", isOpen);
        });
      });

      /* =====================================================
         NATIONALITY
      ====================================================== */

      document.querySelectorAll(".nationality-option").forEach((option) => {
        option.addEventListener("click", () => {
          document.querySelectorAll(".nationality-option").forEach((item) => {
            item.classList.remove("selected");
          });

          option.classList.add("selected");
        });
      });

      /* =====================================================
         BILLING FORM
      ====================================================== */

      const billingForm = document.getElementById("billing-form");

      const termsCheckbox = document.getElementById("terms-checkbox");

      const continueButton = document.getElementById("continue-btn");

      const requiredFields = billingForm.querySelectorAll(
        "input[required], select[required]",
      );

      function updateContinueButton() {
        const fieldsValid = Array.from(requiredFields).every(
          (field) => field.value.trim() !== "",
        );

        continueButton.disabled = !(fieldsValid && termsCheckbox.checked);
      }

      requiredFields.forEach((field) => {
        field.addEventListener("input", updateContinueButton);

        field.addEventListener("change", updateContinueButton);
      });

      termsCheckbox.addEventListener("change", updateContinueButton);

      billingForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (continueButton.disabled) {
    return;
  }

  continueButton.textContent = "PROCESSING...";

  setTimeout(() => {
    window.location.href = "payment.html";
  }, 900);
});