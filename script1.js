console.log("Script is loaded.");

// ===== VALIDATION CLASS =====
class Validator {
  static validateEmail(value) {
    if (!value) return { isValid: false, message: "Email required" };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value))
      return { isValid: false, message: "Enter a valid email" };
    return { isValid: true };
  }

  static validatePassword(value) {
    if (!value) return { isValid: false, message: "Password required" };
    if (value.length < 8)
      return { isValid: false, message: "Password must be at least 8 characters" };
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value))
      return {
        isValid: false,
        message: "Password must contain uppercase, lowercase, and number",
      };
    return { isValid: true };
  }
}

// ===== SLIDER LOGIC =====
const loginText = document.querySelector(".title-text .login");
const loginForm = document.getElementById("loginForm"); // FIXED
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");

signupBtn.onclick = () => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
};

loginBtn.onclick = () => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
};

signupLink.onclick = () => {
  signupBtn.click();
  return false;
};

// ===== INPUT ELEMENTS =====
const emailInput = document.getElementById("loginEmail");
const passwordInput = document.getElementById("loginPassword");
const errorMsg = document.getElementById("errorMsg");

// ===== LIVE VALIDATION =====
emailInput.addEventListener("input", function () {
  const result = Validator.validateEmail(this.value);
  if (!result.isValid) {
    this.classList.add("invalid");
    this.classList.remove("valid");
  } else {
    this.classList.add("valid");
    this.classList.remove("invalid");
  }
});

passwordInput.addEventListener("input", function () {
  const result = Validator.validatePassword(this.value);
  if (!result.isValid) {
    this.classList.add("invalid");
    this.classList.remove("valid");
  } else {
    this.classList.add("valid");
    this.classList.remove("invalid");
  }
});

// ===== SUBMIT HANDLER =====
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const emailResult = Validator.validateEmail(emailInput.value);
  const passwordResult = Validator.validatePassword(passwordInput.value);

  errorMsg.textContent = "";

  if (!emailResult.isValid) {
    errorMsg.textContent = emailResult.message;
    emailInput.classList.add("invalid");
    return;
  }

  if (!passwordResult.isValid) {
    errorMsg.textContent = passwordResult.message;
    passwordInput.classList.add("invalid");
    return;
  }

  // SUCCESS
  document.getElementById("outUsername").textContent = emailInput.value;
  document.getElementById("outPassword").textContent =
    "•".repeat(passwordInput.value.length);
  document.getElementById("output").style.display = "block";
});
