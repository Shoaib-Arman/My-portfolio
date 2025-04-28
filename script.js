// Simple JavaScript for smooth scrolling (optional since Tailwind supports scroll-smooth class)
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    // Initialize AOS animations
    AOS.init({
        duration: 1000,  // Customize speed (1 second)
        easing: 'ease-out-back', // Smooth easing effect
        once: true // Animations happen only once
    });
});
// Typing effect for Hero Section
document.addEventListener("DOMContentLoaded", function() {
    const text = "I am studying Computer Science at UTTARA UNIVERSITY"; // The text you want to type out
    const outputElement = document.getElementById("typed-output");
    let index = 0;

    // Function to type text character by character
    function typeText() {
        if (index < text.length) {
            outputElement.textContent += text.charAt(index); // Add one character at a time
            index++;
            setTimeout(typeText, 100); // Delay between each character (100ms)
        }
    }

    // Start typing effect
    typeText();
});
