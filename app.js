const navList = document.querySelector(".nav__list");
const hamburger = document.getElementById("hamburger-menu");

hamburger.addEventListener("click", () => {
  navList.classList.toggle("showMenu");
});

let documentWidth = document.documentElement.offsetWidth;

let elements = document.querySelectorAll("*");

for (const el of elements) {
  if (el.offsetWidth > documentWidth) {
    console.log(el);
  }
}
