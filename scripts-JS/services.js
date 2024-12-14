// This function handles the booking process
function handleBooking() {
    var userName = prompt("Please enter your name to book the service:");
    if (userName) {
        var serviceConfirmation = confirm("Thank you, " + userName + ". Do you want to confirm your booking?");
        if (serviceConfirmation) {
            alert("Booking confirmed! We look forward to seeing you.");
        } else {
            alert("Booking cancelled. Maybe next time!");
        }
    } else {
        alert("Booking requires a name. Please try again!");
    }
}

// Add event listeners to booking buttons
document.querySelectorAll('.btn-book').forEach(button => {
    button.addEventListener('click', handleBooking);

    // Color change on hover
    button.addEventListener('mouseover', function() {
        this.style.color = '#FFD700'; // Change to gold on hover
    });

    button.addEventListener('mouseout', function() {
        this.style.color = '#004085'; // Change back to dark blue when mouse leaves
    });
});

// Toggle theme and save preference
/*function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
}

// Apply the stored theme on page load
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
    }
});
*/