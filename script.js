// Select the toggle button and navigation links
const navToggle = document.getElementById('js-nav-toggle');
const navLinks = document.getElementById('js-nav-links');

// Add a click event listener to the toggle button
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active'); // Toggle the "active" class
});

// Highlight current page link
const navLinks = document.querySelectorAll('.nav-links a');
const currentPage = window.location.pathname;

navLinks.forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});
