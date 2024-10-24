const email = document.querySelector("#email");
const country = document.querySelector("#country");
const zipcode = document.querySelector("#zip");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm_pass");

const emailRequired = document.querySelector(".email-required");
const emailInvalid = document.querySelector(".invalid-email");
const countryRequired = document.querySelector(".country-required");
const zipRequired = document.querySelector(".zip-required");
const passwordRequired = document.querySelector(".password-required");
const passwordLength = document.querySelector(".password-length");
const confirmPasswordRequired = document.querySelector(
  ".confirm-password-required"
);
const passwordMatch = document.querySelector(".password-match");

function showEmailError() {
  if (email.validity.valueMissing) {
    emailRequired.textContent = "Email is Required";
  }
  if (email.validity.typeMismatch) {
    emailInvalid.textContent = "Invalid Email Entered";
  }
}

function showCountryError() {
  if (country.validity.valueMissing) {
    countryRequired.textContent = "Country is Required";
  }
}

function showZipCodeError() {
  if (zipcode.validity.valueMissing) {
    zipRequired.textContent = "Zip Code is Required";
  }
}

function showPasswordError() {
  if (password.validity.valueMissing) {
    passwordRequired.textContent = "Password is Required";
  }
  if (password.validity.tooShort) {
    passwordLength.textContent =
      "Password Must Be A Minimum of 8 characters long";
  }
}

function showConfirmPasswordError() {
  if (confirmPassword.validity.valueMissing) {
    confirmPasswordRequired.textContent = "Password Confirmation Is Required";
  }
}

email.addEventListener("focusout", () => {
  if (email.validity.valid) {
    emailRequired.textContent = "";
    emailInvalid.textContent = "";
  } else {
    showEmailError();
  }
});

country.addEventListener("focusout", () => {
  if (country.validity.valid) {
    countryRequired.textContent = "";
  } else {
    showCountryError();
  }
});

zipcode.addEventListener("focusout", () => {
  if (zipcode.validity.valid) {
    zipRequired.textContent = "";
  } else {
    showZipCodeError();
  }
});

password.addEventListener("focusout", () => {
  if (password.validity.valid) {
    passwordRequired.textContent = "";
    passwordLength.textContent = "";
  } else {
    showPasswordError();
  }
});

confirmPassword.addEventListener("input", () => {
  if (confirmPassword.value !== password.value) {
    passwordMatch.textContent = "Passwords Must Match";
    confirmPassword.style.borderStyle = "solid";
    confirmPassword.style.borderColor = "red";
  } else {
    passwordMatch.textContent = "";
    confirmPassword.style.borderStyle = "solid";
    confirmPassword.style.borderColor = "green";
  }

  if (confirmPassword.validity.valid) {
    confirmPasswordRequired.textContent = "";
  } else {
    showConfirmPasswordError();
  }
});

const submitButton = document.querySelector(".submit-button");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (
    !email.validity.valid ||
    !country.validity.valid ||
    !zipcode.validity.valid ||
    !password.validity.valid ||
    !confirmPassword.validity.valid ||
    confirmPassword.value !== password.value
  ) {
    showEmailError();
    showCountryError();
    showZipCodeError();
    showPasswordError();
    showConfirmPasswordError();
    event.preventDefault();
  } else {
    event.preventDefault();
    alert("hi five");
    email.value = "";
    country.value = "";
    zipcode.value = "";
    password.value = "";
    confirmPassword.value = "";
  }
});
