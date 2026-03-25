const toggle = document.querySelector(".menu-toggle");
const sidemenu = document.querySelector(".sidemenu");

let wasCollapsed = false;
let resizeTimer;

toggle.addEventListener("click", (e) => {
  if (window.innerWidth <= 752) return;
  e.stopPropagation();
  sidemenu.classList.toggle("collapsed");
  wasCollapsed = sidemenu.classList.contains("collapsed");
});

function handleResize() {
  sidemenu.classList.add("no-transition");

  if (window.innerWidth <= 752) {
    sidemenu.classList.remove("collapsed");
  } else {
    sidemenu.classList.toggle("collapsed", wasCollapsed);
  }

  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    sidemenu.classList.remove("no-transition");
  }, 150);
}

window.addEventListener("resize", handleResize);
handleResize();