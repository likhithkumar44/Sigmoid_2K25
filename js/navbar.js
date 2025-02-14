document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navbarNav = document.querySelector(".navbar-nav");

  if (hamburger && navbarNav) {
    hamburger.addEventListener("click", () => {
      navbarNav.classList.toggle("nav-active");
      hamburger.classList.toggle("is-active");
    });

    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        navbarNav.classList.remove("nav-active");
        hamburger.classList.remove("is-active");
      });
    });
  }
});