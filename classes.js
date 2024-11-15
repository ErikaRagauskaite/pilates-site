document.addEventListener("DOMContentLoaded", function () {
  var dropdowns = document.querySelectorAll(".dropdown");
  dropdowns.forEach(function (dropdown) {
    var button = dropdown.querySelector(".dropbtn");
    var content = dropdown.querySelector(".dropdown-content");

    button.addEventListener("click", function () {
      // Close all other dropdowns
      dropdowns.forEach(function (otherDropdown) {
        if (otherDropdown !== dropdown) {
          otherDropdown.querySelector(".dropdown-content").style.display =
            "none";
        }
      });

      // Toggle the current dropdown
      content.style.display =
        content.style.display === "block" ? "none" : "block";
    });
  });

  // Close dropdowns when clicking outside
  window.addEventListener("click", function (event) {
    if (!event.target.matches(".dropbtn")) {
      dropdowns.forEach(function (dropdown) {
        dropdown.querySelector(".dropdown-content").style.display = "none";
      });
    }
  });
});
