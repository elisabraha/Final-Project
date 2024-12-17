//Elisa Braha
//This code belong to Elisa Braha and has not been copied by other sources

document.addEventListener('DOMContentLoaded', function () {
    // Enable Bootstrap carousel functionality
    const carousel = document.querySelector('#imageSlider');
    if (carousel) {
        $('.carousel').carousel({
            interval: 3000, // Auto-slide every 3 seconds
            pause: 'hover'  // Pause when hovered over
        });
    }

    // Subscribe button click confirmation
    const subscriptionForm = document.getElementById('subscription-form');
    if (subscriptionForm) {
        subscriptionForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent form from submitting

            // Retrieve input values
            const name = document.getElementById('name').value.trim();
            const surname = document.getElementById('surname').value.trim();
            const email = document.getElementById('email').value.trim();

            // Email validation (basic format check)
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!email) {
                alert('Please enter your email to subscribe.');
                return; // Stop here if email is empty
            }

            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return; // Stop here if email format is invalid
            }

            // Show confirmation alert with email
            alert(`Confirmation: Subscription for ${email} is complete!`);

            // Clear the form after successful submission
            subscriptionForm.reset();
        });
    }

});
