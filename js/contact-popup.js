const modal = document.getElementById("contact-modal");
const openBtn = document.getElementById("open-contact");
const closeBtn = document.getElementById("close-contact");

openBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.add("hidden");
});
