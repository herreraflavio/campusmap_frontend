const toggle = document.querySelector(".menu-toggle");
const sidemenu = document.querySelector(".sidemenu");
// const homeButton = document.querySelector(".nav-home");
const closeSheet = document.querySelector(".close-sheet");

let wasCollapsed = true;
let resizeTimer;

toggle.addEventListener("click", (e) => {
  if (window.innerWidth <= 752) return;
  e.stopPropagation();
  sidemenu.classList.toggle("collapsed");
  wasCollapsed = sidemenu.classList.contains("collapsed");
});

// homeButton.addEventListener("click", (e) => {
//   if (window.innerWidth <= 752) {
//     e.preventDefault();
//     sidemenu.classList.add("sheet-open");
//   }
// });

// closeSheet.addEventListener("click", () => {
//   sidemenu.classList.remove("sheet-open");
// });

function handleResize() {
  sidemenu.classList.add("no-transition");

  if (window.innerWidth <= 752) {
    sidemenu.classList.remove("collapsed");
  } else {
    sidemenu.classList.remove("sheet-open");
    sidemenu.classList.toggle("collapsed", wasCollapsed);
  }

  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    sidemenu.classList.remove("no-transition");
  }, 150);
}

function renderSlide(slide_number) {
  const elements = document.querySelectorAll(".slide");

  elements.forEach((element, index) => {
    // index is 0-based (0 = slide 1, 1 = slide 2)
    if (index + 1 === slide_number) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
}

window.addEventListener("resize", handleResize);
handleResize();

// window.addEventListener("onload", renderSlide);
// renderSlide(2);
