// Greeting popup
window.addEventListener('DOMContentLoaded', () => {
  alert("Welcome to Varun's Portfolio!");
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
