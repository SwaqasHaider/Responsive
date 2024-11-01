let currentIndex = 0;
const images = document.querySelector('.carousel-images');
const totalImages = images.querySelectorAll('img').length;

// Function to update the carousel position
function updateCarousel() {
    images.style.transform = `translateX(-${currentIndex * 100}vw)`;
}

// Move to the next image in the carousel
function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages; // Loop back to the start
    updateCarousel();
}

// Move to the previous image in the carousel
function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Loop to the last image
    updateCarousel();
}

// Auto-scroll every 3 seconds (3000 milliseconds)
const autoScroll = setInterval(nextImage, 3000);

// Event listeners for next and previous buttons
document.getElementById('next-btn').addEventListener('click', () => {
    clearInterval(autoScroll); // Stop auto-scroll when user clicks next
    nextImage();
});

document.getElementById('prev-btn').addEventListener('click', () => {
    clearInterval(autoScroll); // Stop auto-scroll when user clicks previous
    prevImage();
});

// Select the menu button and the list of menu links
const menuButton = document.getElementById('menu-btn');
const menuLinks = document.getElementById('menu-links');

// Add a click event listener to the menu button
menuButton.addEventListener('click', () => {
    // Toggle the visibility of the menu links
    if (menuLinks.style.display === 'none' || menuLinks.style.display === '') {
        menuLinks.style.display = 'block'; // Show the menu
    } else {
        menuLinks.style.display = 'none'; // Hide the menu
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menu-btn');
    const menuLinks = document.getElementById('menu-links');

    menuBtn.addEventListener('click', function () {
        menuLinks.classList.toggle('active'); // Toggle class instead of style
    });
});

 window.onscroll = function() {
    const header = document.querySelector('.header');
    const sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  };