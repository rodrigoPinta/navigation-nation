// avoid repetition;
// create a constant to represent each of the elements that we want to interect with from HTML;
const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const nav1 = document.getElementById("nav-1");
const nav2 = document.getElementById("nav-2");
const nav3 = document.getElementById("nav-3");
const nav4 = document.getElementById("nav-4");
const nav5 = document.getElementById("nav-5");
const navItems = [nav1, nav2, nav3, nav4, nav5];

// control navigation animation
function navAnimation(direction1, direction2) {
  // use array method; for each method allows us to write a function each item within the array
  // i + 1; due to array indexes, we have in and out for 1 to 5, array goes from 0 to 4;
  navItems.forEach((nav, i) => {
    nav.classList.replace(
      `slide-${direction1}-${i + 1}`,
      `slide-${direction2}-${i + 1}`
    );
  });
}

function toggleNav() {
  // toggle: menu bars open/closed
  // toggle METHOD to add or remove this parameter; menu bars open/close add the removing the "change class"
  menuBars.classList.toggle("change");
  // toggle: menu active
  overlay.classList.toggle("overlay-active");
  if (overlay.classList.contains("overlay-active")) {
    // use replace method; 2params remove / add
    // overlay.classList.remove("overlay-slide-left");
    // overlay.classList.add("overlay-slide-right");
    overlay.classList.replace("overlay-slide-left", "overlay-slide-right");
    // animate in - nav items
    navAnimation("out", "in");
  } else {
    // use replace method; 2params remove / add
    // overlay.classList.remove("overlay-slide-right");
    // overlay.classList.add("overlay-slide-left");
    overlay.classList.replace("overlay-slide-right", "overlay-slide-left");
    // animate out - nav items
    navAnimation("in", "out");
  }
}

// add eventlisteners so that when we click one one of these elements, we are actually launching a function;
// event listeners are usually in the bottom because we always want to declare a function before call it;

menuBars.addEventListener("click", toggleNav);
navItems.forEach((nav) => {
  nav.addEventListener("click", toggleNav);
});
// nav1.addEventListener("click", toggleNav);
// nav2.addEventListener("click", toggleNav);
// nav3.addEventListener("click", toggleNav);
// nav4.addEventListener("click", toggleNav);
// nav5.addEventListener("click", toggleNav);
