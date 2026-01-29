const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".header-nav");
const navLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});
