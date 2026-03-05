const toggle = document.querySelector(".menu-toggle");
const sidemenu = document.querySelector(".sidemenu");

toggle.addEventListener("click", () => {
  sidemenu.classList.toggle("collapsed");
});