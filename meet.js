const showNavbar = document.querySelector(".nav-section");
let animationApplied = false;
var viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

document.addEventListener('scroll', function() {
    var scrollHeight = window.scrollY;

    if (scrollHeight >= viewportHeight) {
        if (!animationApplied) {
            showNavbar.classList.remove("animate__fadeOutUp");
            showNavbar.classList.add("nav-flex-1");
            showNavbar.classList.add("animate__fadeInDown");

            showNavbar.addEventListener('animationend', function handleAnimationEnd() {
                animationApplied = false;
                showNavbar.removeEventListener('animationend', handleAnimationEnd);
            });

            animationApplied = true;
        }
    } else {
        if (animationApplied) {
            showNavbar.classList.remove("animate__fadeInDown");
            showNavbar.classList.add("animate__fadeOutUp");

            showNavbar.addEventListener('animationend', function handleAnimationEnd() {
                // showNavbar.classList.remove("nav-flex-1");
                animationApplied = false;
                showNavbar.removeEventListener('animationend', handleAnimationEnd);
            });

            animationApplied = false;
        }
    }
});

const toggleMenu = document.querySelector(".toggle-menu");
const showBar = document.querySelector(".hiddenNavbar");
const navbarbtnflex = document.querySelector(".navbar-btn-flex");

toggleMenu.addEventListener('click', () => {
    showBar.classList.toggle("showNavbar");
    navbarbtnflex.classList.toggle("changeColor");
});



document.addEventListener('DOMContentLoaded', function () {
    var scrollButton = document.getElementById('contactButton');
    var targetDiv = document.getElementById('section1');

    scrollButton.addEventListener('click', function () {
        // Scroll to the target div smoothly
        targetDiv.scrollIntoView({ behavior: 'smooth' });
    });
});