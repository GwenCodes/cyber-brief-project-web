function initMobileMenu() {
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");

  if (!btn || !menu) {
    console.warn("Mobile menu elements not found yet — retrying...");
    setTimeout(initMobileMenu, 200); // retry after 200ms
    return;
  }

  btn.addEventListener("click", () => {
    menu.classList.toggle("open");
  });

  console.log("Mobile menu initialized successfully.");
}

window.addEventListener("load", initMobileMenu);
