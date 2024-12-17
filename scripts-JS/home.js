// Carousel Functionality
const slides = document.querySelector('.slides');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

function updateCarousel() {
    const slideWidth = slides.children[0].offsetWidth;
    slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? slides.children.length - 1 : currentIndex - 1;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === slides.children.length - 1) ? 0 : currentIndex + 1;
    updateCarousel();
});

// Update carousel on window resize
window.addEventListener('resize', updateCarousel);
updateCarousel();

// Booking Form Submission
document.getElementById('bookingForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const sessionType = document.getElementById('sessionType').value;
    const sessionDate = document.getElementById('sessionDate').value;
    const sessionTime = document.getElementById('sessionTime').value;

    const confirmationText = `You have successfully booked a ${sessionType.replace(/([A-Z])/g, ' $1').toLowerCase()} session on ${sessionDate} at ${sessionTime}. Thank you! ❤️`;
    
    document.getElementById('confirmationText').textContent = confirmationText;
    document.getElementById('confirmationMessage').style.display = 'block';
});

// Declaration Popup
window.onload = function () {
    setTimeout(() => {
        alert("I'm Jeta Sylejmani and I declare that this code is mine and has not been copied from any other sources. Press OK to continue.");
    }, 2000);
};

// Testimonials Auto-Slide
let currentTestimonialIndex = 0;
const testimonialItems = document.querySelectorAll('.testimonial-item');
const totalTestimonialSlides = testimonialItems.length;

function updateTestimonialCarousel() {
    testimonialItems.forEach((item, index) => {
        item.style.transform = `translateX(-${currentTestimonialIndex * 100}%)`;
    });
}

function moveTestimonialSlide(direction) {
    currentTestimonialIndex = (currentTestimonialIndex + direction + totalTestimonialSlides) % totalTestimonialSlides;
    updateTestimonialCarousel();
}

setInterval(() => moveTestimonialSlide(1), 4000); // Auto-slide every 4 seconds

// Smooth Scrolling for Navigation
document.querySelectorAll('header nav ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
        const targetElement = document.querySelector(link.getAttribute('href'));
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Dynamically Load Header and Footer
['header', 'footer'].forEach(section => {
    fetch(`../view-html/${section}.html`)
        .then(response => {
            if (!response.ok) throw new Error(`Failed to fetch ${section}.html`);
            return response.text();
        })
        .then(data => document.getElementById(`${section}-container`).innerHTML = data)
        .catch(error => console.error(`Error loading ${section}:`, error));
});
