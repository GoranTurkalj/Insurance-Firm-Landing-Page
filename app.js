const hamburgerMenu = document.getElementById("hamburger-menu");
const navList = document.querySelector(".main-nav__list");
const body = document.querySelector("body");
let windowWidth = window.innerWidth;
let menuOpened = false;

//Get window innerWidth on load and resize events
window.addEventListener("load", getInnerWidth);
window.addEventListener("resize", getInnerWidth);

//Gets window innerWidth
function getInnerWidth() {
  windowWidth = window.innerWidth;

  if (menuOpened && windowWidth >= 700) {
    menuOpened = false;
    hideMobileNav();
  }
}

//opens mobile nav
function showMobileNav() {
  menuOpened = true;
  body.classList.add("noscroll");
  hamburgerMenu.src = "./images/icon-close.svg";
  navList.classList.add("nav-fade-in");
}

//closes mobile nav
function hideMobileNav() {
  menuOpened = false;
  body.classList.remove("noscroll");
  hamburgerMenu.src = "./images/icon-hamburger.svg";
  navList.classList.add("nav-fade-out");

  setTimeout(() => {
    navList.classList.remove("nav-fade-in", "nav-fade-out");
  }, 500);
}

//Toggles mobile nav
function toggleMobileNav() {
  if (menuOpened) {
    hideMobileNav();
  } else if (!menuOpened) {
    showMobileNav();
  }
}

hamburgerMenu.addEventListener("click", toggleMobileNav);

//Clicking on links in mobile nav will close the mobile nav
navList.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    hideMobileNav();
  }
});

//Checks if any element causes problems by overflowing
let documentWidth = document.documentElement.offsetWidth;

let elements = document.querySelectorAll("*");

for (const el of elements) {
  if (el.offsetWidth > documentWidth) {
    console.log(el);
  }
}
