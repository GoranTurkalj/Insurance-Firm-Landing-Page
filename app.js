const hamburgerMenu = document.getElementById("hamburger-menu");
const navList = document.querySelector(".main-nav__list");
let menuOpened = false;

function showMobileNav() {
  hamburgerMenu.src = "./images/icon-close.svg";
  navList.classList.add("nav-fade-in");
}

function hideMobileNav() {
  hamburgerMenu.src = "./images/icon-hamburger.svg";
  navList.classList.add("nav-fade-out");

  setTimeout(() => {
    navList.classList.remove("nav-fade-in", "nav-fade-out");
  }, 500);
}

function toggleMobileNav() {
  menuOpened = !menuOpened;
  if (menuOpened) {
    showMobileNav();
  } else if (!menuOpened) {
    hideMobileNav();
  }
}

hamburgerMenu.addEventListener("click", toggleMobileNav);

// let documentWidth = document.documentElement.offsetWidth;

// let elements = document.querySelectorAll("*");

// for (const el of elements) {
//   if (el.offsetWidth > documentWidth) {
//     console.log(el);
//   }
// }
