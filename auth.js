// ==============================
// AUTH TABS
// ==============================

const loginTab = document.getElementById("login-tab");
const signupTab = document.getElementById("signup-tab");
const authSection = document.getElementById("auth-section");
const forgotSection = document.getElementById("forgot-section");
const createPasswordSection = document.getElementById("create-password-section");
const verificationSection =
    document.getElementById("verification-section");
const signupSuccessSection =
    document.getElementById("signup-success-section");

const signupSuccessContinue =
    document.getElementById("signup-success-continue");

const verificationEmail =
    document.getElementById("verification-email");

const resendVerificationBtn =
    document.getElementById("resend-verification-btn");

const verificationSignupSection =
    document.getElementById("verification-signup-section");

const verificationSignupEmail =
    document.getElementById("verification-signup-email");

const resendVerificationSignupBtn =
    document.getElementById("resend-verification-signup-btn");

const continueToNewPassword =
    document.getElementById("continue-to-new-password");
const forgotForm = document.getElementById("forgot-form");
const createPasswordForm = document.getElementById("create-password-form");
const forgotPasswordLink = document.getElementById("forgot-password-link");

const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");

const authModal = document.getElementById("auth-modal");
const adminLoginLink =
    document.getElementById("admin-login-link");

const adminPortalSection =
    document.getElementById("admin-portal-section");

const adminLoginForm =
    document.getElementById("admin-login-form");

const openModalBtns = document.querySelectorAll(".open-auth-modal");



if (resendVerificationSignupBtn) {

    resendVerificationSignupBtn.addEventListener("click", () => {

        verificationSignupSection.classList.add("hidden");

        signupSuccessSection.classList.remove("hidden");

    });

}

if (signupSuccessContinue) {

    signupSuccessContinue.addEventListener("click", () => {

        // Hide all secondary sections

        signupSuccessSection.classList.add("hidden");

        verificationSignupSection.classList.add("hidden");

        verificationSection.classList.add("hidden");

        createPasswordSection.classList.add("hidden");

        forgotSection.classList.add("hidden");


        // Reset to Login for next opening

        authSection.classList.remove("hidden");

        switchTab(true);


        // Close modal

        authModal.classList.remove("active");

    });

}



signupForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const emailInput =
        signupForm.querySelector('input[type="email"]');

    const email = emailInput
        ? emailInput.value.trim()
        : "";

    showSignupVerification(email);

});



openModalBtns.forEach((btn) => {

    btn.addEventListener("click", () => {

        authModal.classList.add("active");

        authSection.classList.remove("hidden");
        forgotSection.classList.add("hidden");
        createPasswordSection.classList.add("hidden");
        verificationSection.classList.add("hidden");
        verificationSignupSection.classList.add("hidden");
        signupSuccessSection.classList.add("hidden");

        switchTab(true);

    });

});

// ==============================
// ADMIN LOGIN
// ==============================

if (adminLoginLink) {

    adminLoginLink.addEventListener("click", () => {

        // Hide all other auth sections

        authSection.classList.add("hidden");
        forgotSection.classList.add("hidden");
        createPasswordSection.classList.add("hidden");
        verificationSection.classList.add("hidden");
        verificationSignupSection.classList.add("hidden");
        signupSuccessSection.classList.add("hidden");
        adminPortalSection.classList.add("hidden");

        // Show Admin Portal

        adminPortalSection.classList.remove("hidden");

    });

}

// ==============================
// ADMIN LOGIN SUBMIT
// ==============================

// if (adminLoginForm) {

//     adminLoginForm.addEventListener("submit", (e) => {

//         e.preventDefault();

//         // Admin login successful

//         adminPortalSection.classList.add("hidden");

//         authSection.classList.remove("hidden");

//         switchTab(true);

//         // Close Auth Modal

//         authModal.classList.remove("active");

//     });

// }

// ==============================
// ADMIN LOGIN SUBMIT
// ==============================

if (adminLoginForm) {

    adminLoginForm.addEventListener("submit", (e) => {

        e.preventDefault();

        // Admin login successful
        window.location.href = "dashbord.html";

    });

}

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

    const emailInput = forgotForm.querySelector('input[type="email"]');

    const email = emailInput
        ? emailInput.value.trim()
        : "";

    showVerificationEmail(email);

});

function showVerificationEmail(email) {

    authSection.classList.add("hidden");
    forgotSection.classList.add("hidden");
    createPasswordSection.classList.add("hidden");

    verificationSection.classList.remove("hidden");

    if (email && verificationEmail) {
        verificationEmail.textContent = email;
    }

}

function showSignupVerification(email) {

    authSection.classList.add("hidden");
    forgotSection.classList.add("hidden");
    createPasswordSection.classList.add("hidden");
    verificationSection.classList.add("hidden");

    verificationSignupSection.classList.remove("hidden");

    if (email && verificationSignupEmail) {
        verificationSignupEmail.textContent = email;
    }

}

createPasswordForm.addEventListener("submit", (e) => {

    e.preventDefault();

    // Password reset successful

    createPasswordSection.classList.add("hidden");
    verificationSection.classList.add("hidden");
    forgotSection.classList.add("hidden");

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
// ==============================
// BACK BUTTON
// ==============================

backBtn.addEventListener("click", () => {

    // ADMIN PORTAL → LOGIN

    if (
        adminPortalSection &&
        !adminPortalSection.classList.contains("hidden")
    ) {

        adminPortalSection.classList.add("hidden");

        authSection.classList.remove("hidden");

        switchTab(true);

        return;
    }

    // Signup Success → Signup Verification
    if (!signupSuccessSection.classList.contains("hidden")) {

        signupSuccessSection.classList.add("hidden");
        verificationSignupSection.classList.remove("hidden");

        return;
    }


    // Signup Verification → Signup
    if (!verificationSignupSection.classList.contains("hidden")) {

        verificationSignupSection.classList.add("hidden");
        authSection.classList.remove("hidden");

        switchTab(false);

        return;
    }


    // Forgot Password Verification → Confirm Email
    if (!verificationSection.classList.contains("hidden")) {

        verificationSection.classList.add("hidden");
        forgotSection.classList.remove("hidden");

        return;
    }


    // NEW PASSWORD → VERIFICATION EMAIL

    if (
        createPasswordSection &&
        !createPasswordSection.classList.contains("hidden")
    ) {

        createPasswordSection.classList.add("hidden");

        verificationSection.classList.remove("hidden");

        return;
    }


    // Confirm Email → Login
    if (!forgotSection.classList.contains("hidden")) {

        forgotSection.classList.add("hidden");
        authSection.classList.remove("hidden");

        switchTab(true);

        return;
    }


    // Login / Signup → Close Modal
    authModal.classList.remove("active");

});

authModal.addEventListener("click", (e) => {

    if (e.target === authModal) {

        authModal.classList.remove("active");

    }

});

document
    .querySelector(".auth-modal-content")
    .addEventListener("click", (e) => {

        e.stopPropagation();

    });


if (resendVerificationBtn) {

    resendVerificationBtn.addEventListener("click", () => {

        verificationSection.classList.add("hidden");

        createPasswordSection.classList.remove("hidden");

    });

}