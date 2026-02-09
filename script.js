// ===== SLIDER LOGIC (UNCHANGED) =====
const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
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

// ===== LOGIN FORM HANDLING =====
loginForm.addEventListener("submit", function (e) {
  e.preventDefault(); // stop page refresh

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  document.getElementById("outUsername").textContent = email;
  document.getElementById("outPassword").textContent = password;

  document.getElementById("output").style.display = "block";
});
