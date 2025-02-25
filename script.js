document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScript Loaded!");

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId.startsWith("#")) {
        document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = targetId; // Navigate normally for external pages
      }
    });
  });

  // "Get Started" button click event
  const getStartedBtn = document.querySelector(".cta-btn");
  if (getStartedBtn) {
    getStartedBtn.addEventListener("click", function () {
      alert("Welcome to Lucky Shrub! Let's start your garden transformation.");
    });
  }

  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("nav ul");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");
    });
  }
});
