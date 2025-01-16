// Define the text to display
const textContent = "Hello Alex Jaq.....";

// Get the text element
const textElement = document.getElementById('text');

// Initialize variables
let index = 0;

// Function to display text letter by letter
function typeWriterEffect() {
  if (index < textContent.length) {
    textElement.textContent += textContent[index];
    index++;
    setTimeout(typeWriterEffect, 100); // Add the next letter every 100ms
  } else {
    // Once typing is complete, trigger the fade-out after a short delay
    setTimeout(() => {
      textElement.style.opacity = 0; // Gradual fade-out
    }, 1000); // Wait 1 second before starting the fade-out
  }
}

// Start the typewriter effect
typeWriterEffect();
