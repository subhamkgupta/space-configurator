function setPart(part, filename) {
  const img = document.getElementById(part);

  // Fade out the current image
  img.style.opacity = 0;

  // Wait for the current image to fade out before updating the source
  setTimeout(() => {
    // Change image source
    img.src = `assets/${filename}`;
    
    // Wait for the new image to load
    img.onload = () => {
      // Fade in the new image once it's fully loaded
      img.style.opacity = 1;
    };

    // If image fails to load (e.g., incorrect src), set opacity to 1 (fallback)
    img.onerror = () => {
      img.style.opacity = 1;
    };
  }, 500); // Delay for fade-out to complete (matching CSS transition time)
}

function clearConfig() {
  const img = document.getElementById('platform');
  
  // Fade out the image
  img.style.opacity = 0;
  
  // After fade-out finishes, reset the image
  setTimeout(() => {
    img.src = ''; // Remove the image source
  }, 500); // Wait until the fade-out transition ends
}
