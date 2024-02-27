const showNavbar = document.querySelector(".nav-section");
showNavbar.classList.add("nav-flex-1");
showNavbar.classList.add("animate__fadeInDown");


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