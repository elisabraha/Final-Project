document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("booking-form");
  var paymentSection = document.getElementById("payment-section");
  var confirmPaymentButton = document.getElementById("confirm-payment");
  var creditCardForm = document.getElementById("credit-card-form");
  var paymentMethodRadioButtons = document.querySelectorAll('input[name="payment"]');
  var expiryDateInput = document.getElementById("expiry-date"); // Expiry date input field

  // Prices for each service
  var servicePrices = {
    "Massage": 50,
    "Spa": 60,
    "Yoga Class": 30,
    "Fitness": 40,
    "Pool Area": 20
  };

  // Show payment section after form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    paymentSection.style.display = "block";
    window.scrollTo({
      top: paymentSection.offsetTop - 100,
      behavior: 'smooth'
    });

    // Calculate total price after form submission
    calculateTotalPrice();
  });

  // Toggle credit card form visibility based on selected payment method
  paymentMethodRadioButtons.forEach(function (radioButton) {
    radioButton.addEventListener("change", function () {
      if (document.querySelector('input[name="payment"]:checked').value === "card") {
        creditCardForm.classList.remove("hidden");
      } else {
        creditCardForm.classList.add("hidden");
      }
    });
  });

  // Confirm payment button functionality
  confirmPaymentButton.addEventListener("click", function () {
    var selectedPaymentMethod = document.querySelector('input[name="payment"]:checked').value;

    if (selectedPaymentMethod === "cash") {
      var email = document.getElementById("email").value;
      alert("Invoice Successfully sent to " + email + ". Please provide at the reception for a smoother check-in!");
      showBookingDetails();
    } else if (selectedPaymentMethod === "card") {
      var cardNumber = document.getElementById("card-number").value;
      var expiryDate = document.getElementById("expiry-date").value;
      var cvv = document.getElementById("cvv").value;

      var expiryMonthYear = expiryDate.split('/');
      var expiryMonth = parseInt(expiryMonthYear[0], 10);
      var expiryYear = parseInt('20' + expiryMonthYear[1], 10);
      var currentDate = new Date();
      var currentMonth = currentDate.getMonth() + 1;
      var currentYear = currentDate.getFullYear();

      if (expiryYear < currentYear || (expiryYear === currentYear && expiryMonth < currentMonth)) {
        alert("Your Credit Card has expired! Please renew and try again.");
      } else {
        alert("Card is valid! Proceeding...");
        showBookingDetails();
      }
    }
  });

  // Add MM/YY auto-formatting to expiry date input
  expiryDateInput.addEventListener("input", function (event) {
    var value = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    if (value.length >= 2) {
      value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    event.target.value = value;
  });

  // Calculate total price function
  function calculateTotalPrice() {
    var service = document.getElementById("service").value;
    var numberOfAdults = document.getElementById("adults-number").value;
    var pricePerAdult = servicePrices[service];
    var totalPrice = pricePerAdult * numberOfAdults;

    // Display the total price in the booking details
    document.getElementById("total-price").textContent = totalPrice;
    document.getElementById("confirmed-adults").textContent = numberOfAdults;
  }

  // Show booking details function
  function showBookingDetails() {
    var confirmedName = document.getElementById("confirmed-name");
    var confirmedEmail = document.getElementById("confirmed-email");
    var confirmedService = document.getElementById("confirmed-service");
    var confirmedDate = document.getElementById("confirmed-date");
    var confirmedTime = document.getElementById("confirmed-time");

    confirmedName.textContent = document.getElementById("name").value;
    confirmedEmail.textContent = document.getElementById("email").value;
    confirmedService.textContent = document.getElementById("service").value;
    confirmedDate.textContent = document.getElementById("date").value;
    confirmedTime.textContent = document.getElementById("time").value;

    var bookingDetails = document.getElementById("booking-details");
    bookingDetails.style.display = "block";
    paymentSection.style.display = "none"; // Hide the payment section
  }
});
