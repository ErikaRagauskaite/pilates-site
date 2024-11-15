document.addEventListener("DOMContentLoaded", function () {
  const bookButtons = document.querySelectorAll(".book-button");
  const bookingSection = document.getElementById("booking-section");
  const bookingForm = document.getElementById("booking-form");
  const classNameInput = document.getElementById("class-name");
  const classTimeInput = document.getElementById("class-time");
  const emailInput = document.getElementById("email");

  bookButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const className = this.dataset.class;
      const classTime = this.dataset.time;
      classNameInput.value = className;
      classTimeInput.value = classTime;
      bookingSection.style.display = "block";
      window.scrollTo(0, bookingSection.offsetTop);
    });
  });

  bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();
    if (validateEmail(emailInput.value)) {
      alert(
        `You have successfully booked ${classNameInput.value} at ${classTimeInput.value}`
      );
      bookingSection.style.display = "none";
      bookingForm.reset();
    } else {
      alert("Please enter a valid email address.");
    }
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
});
