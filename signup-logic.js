document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("newsletter-form");
  const successMsg = document.getElementById("success-message");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevents the page from refreshing

      // Hide form and show success
      form.style.display = "none";
      successMsg.classList.remove("hidden");

      console.log("CISO Subscription Successful");
    });
  }
});
