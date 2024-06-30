const contain = document.getElementById("hde");
const sign = document.getElementById("signup-form");
document.addEventListener("DOMContentLoaded", (event) => {
  contain.classList.add("container");
});

const scriptURL =
  "https://script.google.com/macros/s/AKfycbzIyBk-3vh1qI7mTnV4eNN2XSET6J3LIcBNll7CuSrejIts1YBxFHP4NZoEGz1jW1Hz-w/exec";
const form = document.forms["sign-up form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => alert("Form submitted successfully!"))

    .catch((error) => console.error("Error!", error.message));
  form.reset();
});
