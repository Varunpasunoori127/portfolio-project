// ================================
// SMOOTH SCROLLING
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// ================================
// HEADER SHADOW ON SCROLL
// ================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {
    header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";
  } else {
    header.style.boxShadow = "none";
  }

});

// ================================
// ACTIVE NAV LINK
// ================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }

  });

});

// ================================
// FADE IN ANIMATION
// ================================

const fadeElements = document.querySelectorAll(
  ".about-card, .skill-box, .project-card"
);

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {

      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";

    }

  });

}, {
  threshold: 0.2
});

fadeElements.forEach((el) => {

  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "all 0.8s ease";

  observer.observe(el);

});

// ================================
// TYPING EFFECT
// ================================

const typingText = [
  "Full Stack Developer",
  "React Developer",
  "Spring Boot Developer",
  "MSc Computing Graduate"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

  if (count === typingText.length) {
    count = 0;
  }

  currentText = typingText[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".small-text").textContent = letter;

  if (letter.length === currentText.length) {

    setTimeout(() => {

      count++;
      index = 0;

      type();

    }, 1500);

  } else {

    setTimeout(type, 100);

  }

})();