
document.addEventListener("DOMContentLoaded", function () {


    /* ===============================
       LUCIDE ICONS
       =============================== */

    if (window.lucide) {

        lucide.createIcons();

    }



    /* ===============================
       QUANTITY
       =============================== */

    const decreaseBtn =
        document.getElementById("decrease-quantity");

    const increaseBtn =
        document.getElementById("increase-quantity");

    const quantityElement =
        document.getElementById("quantity");

    const totalElement =
        document.getElementById("cart-total");

    const ticketCountElement =
        document.getElementById("ticket-count");


    const ticketPrice = 4999;

    let quantity = 1;



    function updateCart() {

        quantityElement.textContent = quantity;


        const total =
            ticketPrice * quantity;


        totalElement.textContent =
            "₹ " + total.toLocaleString("en-IN");


        ticketCountElement.textContent =
            quantity +
            (quantity === 1
                ? " ticket"
                : " tickets");


        document.querySelector("h1").textContent =
            quantity + "/1 items selected";

    }



    /* ===============================
       DECREASE
       =============================== */

    decreaseBtn.addEventListener(
        "click",
        function () {

            if (quantity > 1) {

                quantity--;

                updateCart();

            }

        }
    );



    /* ===============================
       INCREASE
       =============================== */

    increaseBtn.addEventListener(
        "click",
        function () {

            quantity++;

            updateCart();

        }
    );


});
