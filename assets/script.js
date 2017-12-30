
// NavBar Scroll Effect
window.onscroll = function() {changeBGColor()};
var navbar = document.getElementById("navbar");
var breakpoint = navbar.offsetTop = 500;

function changeBGColor() {
  if (window.pageYOffset >= breakpoint) {
    navbar.classList.add("changeColor");
  } else {
    navbar.classList.remove("changeColor");
  }
}

// Counter functions
var happy = document.querySelector("#happy");
var working = document.querySelector("#working");
var projects = document.querySelector("#projects");
var awards = document.querySelector("#awards");
var counter = document.querySelector(".counter");

function animateValue(id, start, end, duration) {
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

function startCount() {
	animateValue("happy", 0, 15, 500);
	animateValue("working", 0, 325, 500);
	animateValue("projects", 0, 19, 500);
	animateValue("awards", 0, 13, 500);	
}

function isInViewport(elem) {
  var bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};

window.onscroll = function() {if (isInViewport(counter)) {startCount();}}