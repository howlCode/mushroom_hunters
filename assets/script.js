
// NavBar Scroll Effect
window.onscroll = function() {changeBGColor()};
var navbar = document.getElementById("navbar");
var breakpoint = navbar.offsetTop = 500;

function changeBGColor() {
  if (window.pageYOffset >= breakpoint) {
    navbar.classList.add("changeColor")
  } else {
    navbar.classList.remove("changeColor");
  }
}
