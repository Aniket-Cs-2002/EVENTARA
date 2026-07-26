// ==============================
// AUTH TABS
// ==============================

const loginTab = document.getElementById("login-tab");
const signupTab = document.getElementById("signup-tab");
const authSection = document.getElementById("auth-section");
const forgotSection = document.getElementById("forgot-section");
const createPasswordSection = document.getElementById("create-password-section");
const forgotForm = document.getElementById("forgot-form");
const createPasswordForm = document.getElementById("create-password-form");
const forgotPasswordLink = document.getElementById("forgot-password-link");

const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");




function showForgotPassword() {

    authSection.classList.add("hidden");
    forgotSection.classList.remove("hidden");
    createPasswordSection.classList.add("hidden");

}

// ==============================
// SWITCH TAB
// ==============================

function switchTab(showLogin) {

    // Show / Hide Forms
    loginForm.classList.toggle("hidden", !showLogin);
    signupForm.classList.toggle("hidden", showLogin);

    // Active Login
    if (showLogin) {

        loginTab.style.backgroundColor = "#EAD6F9";
        signupTab.style.backgroundColor = "#FFFFFF";

        loginTab.classList.add("shadow-sm");
        signupTab.classList.remove("shadow-sm");

    }

    // Active Signup
    else {

        signupTab.style.backgroundColor = "#EAD6F9";
        loginTab.style.backgroundColor = "#FFFFFF";

        signupTab.classList.add("shadow-sm");
        loginTab.classList.remove("shadow-sm");

    }

}

// ==============================
// TAB EVENTS
// ==============================

loginTab.addEventListener("click", () => {

    switchTab(true);

});

signupTab.addEventListener("click", () => {

    switchTab(false);

});

// Default
switchTab(true);


forgotPasswordLink.addEventListener("click", (e) => {
    e.preventDefault();
    showForgotPassword();
});


// ==============================
// FORGOT PASSWORD
// ==============================

forgotForm.addEventListener("submit", (e) => {

    e.preventDefault();

    // OTP verified successfully

    forgotSection.classList.add("hidden");
    createPasswordSection.classList.remove("hidden");

});


createPasswordForm.addEventListener("submit", (e) => {

    e.preventDefault();

    // Password reset successful

    createPasswordSection.classList.add("hidden");
    authSection.classList.remove("hidden");

    switchTab(true);

});




// ==============================
// PASSWORD TOGGLE
// ==============================

document.querySelectorAll(".toggle-password").forEach((button) => {

    button.addEventListener("click", () => {

        const input = button.parentElement.querySelector("input");
        const icon = button.querySelector("i");

        if (input.type === "password") {

            input.type = "text";

            icon.classList.remove("fa-eye-slash");
            icon.classList.add("fa-eye");

        } else {

            input.type = "password";

            icon.classList.remove("fa-eye");
            icon.classList.add("fa-eye-slash");

        }

    });

});

const backBtn = document.getElementById("back-btn");
// ==============================
// BACK BUTTON
// ==============================

backBtn.addEventListener("click", () => {

    // Create Password → Forgot Password

    if (!createPasswordSection.classList.contains("hidden")) {

        createPasswordSection.classList.add("hidden");
        forgotSection.classList.remove("hidden");
        return;

    }

    // Forgot Password → Login

    if (!forgotSection.classList.contains("hidden")) {

        forgotSection.classList.add("hidden");
        authSection.classList.remove("hidden");

        switchTab(true);
        return;

    }

    // Login / Signup → Home

    window.location.href = "./index.html";

});