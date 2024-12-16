const slides = document.querySelector('.slides');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

// Function to update slide position
function updateCarousel() {
    const slideWidth = slides.children[0].offsetWidth;
    slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Event listeners for navigation
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? slides.children.length - 1 : currentIndex - 1;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === slides.children.length - 1) ? 0 : currentIndex + 1;
    updateCarousel();
});

// Update on window resize
window.addEventListener('resize', updateCarousel);

// Initial update
updateCarousel();



// Button hover effect
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('mouseover', () => {
    button.style.background = '#D39D55';
  });
  button.addEventListener('mouseout', () => {
    button.style.background = '#8D0B41';
  });
});

// Smooth scrolling for navigation (if anchors are added in navbar)
const navLinks = document.querySelectorAll('header nav ul li a');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
