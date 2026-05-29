document.addEventListener("DOMContentLoaded", () => {
  const sidemenu = document.getElementById("sidemenu");
  const openBtn = document.getElementById("open-btn");
  const closeBtn = document.getElementById("close-btn");

  openBtn?.addEventListener("click", () => {
    sidemenu.classList.add("show");
  });

  closeBtn?.addEventListener("click", () => {
    sidemenu.classList.remove("show");
  });
});
