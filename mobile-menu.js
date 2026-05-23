window.addEventListener("load", () => {
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");

  if (!btn || !menu) {
    console.warn("Mobile menu elements not found.");
    return;
  }

  btn.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
});
