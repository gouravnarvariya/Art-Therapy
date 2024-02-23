  
const showNavbar = document.querySelector(".nav-section")

document.addEventListener('scroll', function() {
    var scrollHeight = window.scrollY;
    var screenSize = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var leftElement = document.querySelector('.left');
    var rightElement = document.querySelector('.right');
   console.log(scrollHeight)
    if ((scrollHeight >= 800 && screenSize > 601) || (scrollHeight >= 700 && screenSize < 600)) {
        leftElement.classList.add('animate__fadeInLeft');
        rightElement.classList.add('animate__fadeInRight');
       
    } else {
        leftElement.classList.remove('animate__fadeInLeft');
        rightElement.classList.remove('animate__fadeInRight');
       
    }

    if ((scrollHeight >= 800 && screenSize > 601) || (scrollHeight >= 700 && screenSize < 600)) {
        showNavbar.classList.remove("animate__fadeOutUp");
        showNavbar.classList.add("nav-flex-1");
        showNavbar.classList.add("animate__fadeInDown");
    } else {
        showNavbar.classList.add("animate__fadeOutUp");
        showNavbar.classList.remove("animate__fadeInDown");
    }
});

const toggleMenu = document.querySelector(".toggle-menu")
const showBar = document.querySelector(".hiddenNavbar")
const navbarbtnflex = document.querySelector(".navbar-btn-flex") 
toggleMenu.addEventListener('click',()=>{
    console.log("hello")
    showBar.classList.toggle("showNavbar")
    navbarbtnflex.classList.toggle("changeColor")
});











function submitForm() {
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Add data to Cloud Firestore
    db.collection("contacts").add({
        email: email,
        phone: phone,
        message: message    
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        // Optionally, redirect or show a success message
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}


const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Online-program", "Offline-program", "one-on-one", "Customised group"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});



document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slider .therapy-inner-div');

    let index = 0;

    function showNextSlide() {
        slides.forEach((slide) => {
            slide.style.display = 'none';
        });

        index = (index + 1) % slides.length;
        slides[index].style.display = 'block';
    }

    // Initial setup
    slides.forEach((slide, i) => {
        slide.style.display = i === 0 ? 'block' : 'none';
    });

    setInterval(showNextSlide, 2000); // Change slide every 2000 milliseconds (2 seconds)
});









