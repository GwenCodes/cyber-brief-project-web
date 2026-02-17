document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("newsletter-form");
  const successMsg = document.getElementById("success-message");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = new FormData(form);

      // This "fetches" the Netlify handler
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      })
        .then(() => {
          form.style.display = "none";
          successMsg.classList.remove("hidden");
        })
        .catch((error) => alert(error));
    });
  }
});
