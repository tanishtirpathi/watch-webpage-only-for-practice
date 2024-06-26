const form = document.getElementById("signup-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Simulate form submission (replace with your actual logic)
  alert("Form submitted successfully!");
  window.location.href = "/index.html";
});

const contain = document.getElementById("hde");

document.addEventListener("DOMContentLoaded", (event) => {
  contain.classList.add("container");
});
