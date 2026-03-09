const toggle = document.querySelector(".menu-toggle");
const sidemenu = document.querySelector(".sidemenu");
let wasCollapsed = false;
let resizeTimer;

// Desktop
toggle.addEventListener("click", (e) => {
  e.stopPropagation();
  sidemenu.classList.toggle("collapsed");
  wasCollapsed = sidemenu.classList.contains("collapsed");
});

// Mobile
sidemenu.addEventListener("click", () => {
  if (window.innerWidth <= 752) {
    sidemenu.classList.toggle("active");
  }
});

// Resize
function handleResize() {
  // Disable transitions immediately
  sidemenu.classList.add("no-transition");

  if (window.innerWidth <= 752) {
    sidemenu.classList.remove("collapsed");
  } else {
    sidemenu.classList.toggle("collapsed", wasCollapsed);
  }

  // Re-enable transitions after a short delay
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    sidemenu.classList.remove("no-transition");
  }, 150);
}

window.addEventListener("resize", handleResize);
handleResize();