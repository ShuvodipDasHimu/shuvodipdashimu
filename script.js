// Select the toggle button and navigation links
const navToggle = document.getElementById('js-nav-toggle');
const navLinks = document.getElementById('js-nav-links');

// Add a click event listener to the toggle button
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active'); // Toggle the "active" class
});
