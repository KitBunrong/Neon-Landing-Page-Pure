const menuBtn = document.querySelector(".menu-btn");
const menuItems = document.querySelector(".menu-items");

menuBtn.addEventListener("click", () => {
  toggle();
});

function toggle() {
  menuBtn.classList.toggle("open");
  menuItems.classList.toggle("open");
}
