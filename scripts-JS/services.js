document.addEventListener('DOMContentLoaded', function () {
    // Enable Bootstrap carousel functionality
    const carousel = document.querySelector('#imageSlider');
    if (carousel) {
        $('.carousel').carousel({
            interval: 3000, // Auto-slide every 3 seconds
            pause: 'hover'  // Pause when hovered over
        });
    }

    // Contact form submission with popup confirmation
    const questionForm = document.querySelector('.question-form');
    if (questionForm) {
        questionForm.addEventListener('submit', function (event) {
            event.preventDefault();

            // Show popup confirmation
            alert('Thank you for your interest! Your question has been submitted.');

            // Clear the form inputs
            questionForm.reset();
        });
    }

    // Book Now button click confirmation
    const bookNowButtons = document.querySelectorAll('.book-now');
    if (bookNowButtons.length > 0) {
        bookNowButtons.forEach(button => {
            button.addEventListener('click', () => {
                alert('Thank you for choosing this service! A representative will contact you soon.');
            });
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        const navbar = document.querySelector('.navbar');
    
        if (navbar) {
            const navbarHeight = navbar.offsetHeight;
    
            window.addEventListener('scroll', () => {
                if (window.scrollY >= navbarHeight) {
                    navbar.classList.add('fixed-top', 'shadow-sm'); // Add Bootstrap's sticky equivalent
                } else {
                    navbar.classList.remove('fixed-top', 'shadow-sm'); // Remove when back to the top
                }
            });
        }
    });
    
});
