const toggle = document.querySelector(".menu-toggle");
const sidemenu = document.querySelector(".sidemenu");

if (toggle) {
  toggle.addEventListener("click", () => {
    sidemenu.classList.toggle("collapsed");
  });
}

function handleToggleVisibility() {
  if (window.innerWidth <= 752 && toggle) {
    toggle.remove();
  }
}

handleToggleVisibility();