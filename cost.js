document.addEventListener("DOMContentLoaded", function () {
  const membershipSelect = document.getElementById("membership");
  const discountedPriceElement = document.getElementById("discounted-price");
  const regularPriceElement = document.getElementById("regular-price");

  const membershipPrices = {
    basic: 30,
    premium: 50,
    elite: 80,
  };

  function updatePrices() {
    const selectedMembership = membershipSelect.value;
    const regularPrice = membershipPrices[selectedMembership];
    const discountedPrice = regularPrice * 0.8;

    discountedPriceElement.textContent = `£${discountedPrice.toFixed(2)}`;
    regularPriceElement.textContent = `£${regularPrice.toFixed(2)}`;
  }

  membershipSelect.addEventListener("change", updatePrices);

  // Initialize prices on page load
  updatePrices();
});
