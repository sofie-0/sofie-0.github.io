// Select the text element
const textElement = document.getElementById('text');

// Set a timer to trigger the fade-out after 3 seconds
setTimeout(() => {
  textElement.style.opacity = 0; // Gradually fade out
}, 3000); // 3000ms = 3 seconds
