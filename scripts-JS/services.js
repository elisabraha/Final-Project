// script.js
// Open Modal when "Book Now" is clicked
const modal = document.getElementById("bookingModal");
const closeModal = document.querySelector(".close-modal");
const bookNowButtons = document.querySelectorAll(".book-now");
const serviceInput = document.getElementById("service");

// Add event listeners to all "Book Now" buttons
bookNowButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    const service = e.target.getAttribute("data-service"); // Get the service name
    serviceInput.value = service; // Populate the hidden input with the service name
    modal.classList.remove("hidden"); // Show the modal
  });
});

// Close the modal
closeModal.addEventListener("click", () => {
  modal.classList.add("hidden"); // Hide the modal
});

// Handle form submission
const bookingForm = document.getElementById("bookingForm");
bookingForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form from submitting normally

  // Retrieve form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const service = document.getElementById("service").value;

  // Display a confirmation message (you could make this dynamic)
  alert(`Thank you, ${name}! Your booking for ${service} is confirmed on ${date} at ${time}.`);

  // Close the modal and reset the form
  modal.classList.add("hidden");
  bookingForm.reset();
});
