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
// Booking Form Submission
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const sessionType = document.getElementById('sessionType').value;
    const sessionDate = document.getElementById('sessionDate').value;
    const sessionTime = document.getElementById('sessionTime').value;

    const confirmationText = `You have successfully booked a ${sessionType.replace(/([A-Z])/g, ' $1').toLowerCase()} session on ${sessionDate} at ${sessionTime}. Thank you! <3`;
    
    // Display confirmation message
    document.getElementById('confirmationText').textContent = confirmationText;
    document.getElementById('confirmationMessage').style.display = 'block';
});

// Popup message
window.onload = function() {
    setTimeout(function() {
        alert("Welcome to Zen Zone! We're here to help you relax and recharge.");
    }, 2000); // The popup will appear 2 seconds after the page loads
}

let currentTestimonialIndex = 0;
const totalTestimonialSlides = document.querySelectorAll('.testimonial-item').length;

// Function to move the testimonial slide
function moveTestimonialSlide(direction) {
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    
    // Update the current index based on the direction
    currentTestimonialIndex += direction;
    
    // Handle loop around the slides
    if (currentTestimonialIndex < 0) {
        currentTestimonialIndex = totalTestimonialSlides - 1;
    } else if (currentTestimonialIndex >= totalTestimonialSlides) {
        currentTestimonialIndex = 0;
    }

    // Update the carousel
    updateTestimonialCarousel();
}

// Function to update the carousel
function updateTestimonialCarousel() {
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    testimonialItems.forEach((item, index) => {
        // Apply translateX to shift items based on the current index
        item.style.transform = `translateX(-${currentTestimonialIndex * 100}%)`;
    });
}

// Set an interval to auto-slide the testimonials every 5 seconds (5000 milliseconds)
setInterval(() => {
    moveTestimonialSlide(1); // Move to the next slide
}, 5000);  // Change the number to adjust the speed of the slide transition


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


 // Dynamically load the header
 fetch('../view-html/header.html') 
 .then(response => {
     if (!response.ok) {
         throw new Error('Failed to fetch header.html');
     }
     return response.text();
 })
 .then(data => {
     document.getElementById('header-container').innerHTML = data;
 })
 .catch(error => {
     console.error('Error loading header:', error);
 });


  // Dynamically load the footer
  fetch('../view-html/footer.html') 
  .then(response => {
      if (!response.ok) {
          throw new Error('Failed to fetch header.html');
      }
      return response.text();
  })
  .then(data => {
      document.getElementById('footer-container').innerHTML = data;
  })
  .catch(error => {
      console.error('Error loading footer:', error);
  });