  
// const showNavbar = document.querySelector(".nav-section")

// document.addEventListener('scroll', function() {
//     var scrollHeight = window.scrollY;
//     var screenSize = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
//     var leftElement = document.querySelector('.left');
//     var rightElement = document.querySelector('.right');
// //     console.log(leftElement)
// //    console.log(scrollHeight)
   

//     if ((scrollHeight >= 788 && screenSize > 601) || (scrollHeight >= 700 && screenSize < 600)) {
//         showNavbar.classList.remove("animate__fadeOutUp");
//         showNavbar.classList.add("nav-flex-1");
//           showNavbar.classList.add("animate__fadeInDown", function() {
//             // This function will be called once the showNavbar animation is complete
//             handleLeftRightAnimation();
//             console.log("first");
//         });
//     } else {
//         showNavbar.classList.add("animate__fadeOutUp");
//         showNavbar.classList.remove("animate__fadeInDown");
//     }
//     function handleLeftRightAnimation() {
//         if ((scrollHeight >= 788 && screenSize > 601) || (scrollHeight >= 700 && screenSize < 600)) {
//             // Add classes to leftElement and rightElement
//             leftElement.classList.add('animate__fadeInLeft');
//             rightElement.classList.add('animate__fadeInRight');
//             console.log("if")
//         } else {
//             leftElement.classList.remove('animate__fadeInLeft');
//             rightElement.classList.remove('animate__fadeInRight');
//             console.log("else")
//         }
//     }
//     // if ((scrollHeight >= 788 && screenSize > 601) || (scrollHeight >= 700 && screenSize < 600)) {
//     //     leftElement.classList.add('animate__fadeInLeft');
//     //     rightElement.classList.add('animate__fadeInRight');
       
//     // } else {
//     //     leftElement.classList.remove('animate__fadeInLeft');
//     //     rightElement.classList.remove('animate__fadeInRight');
       
//     // }
// });

const showNavbar = document.querySelector(".nav-section");
let animationApplied = false;

// Get viewport height (screen height)
var viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

console.log(viewportHeight);


document.addEventListener('scroll', function() {
    var scrollHeight = window.scrollY;
    var screenSize = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var leftElement = document.querySelector('.left');
    var rightElement = document.querySelector('.right');

    if (scrollHeight >= viewportHeight)  {
        if (!animationApplied) {
            showNavbar.classList.remove("animate__fadeOutUp");
            showNavbar.classList.add("nav-flex-1");
            showNavbar.classList.add("animate__fadeInDown");

            showNavbar.addEventListener('animationend', function handleAnimationEnd() {
                handleLeftRightAnimation();
                console.log("first");

                // Reset the animationApplied flag
                animationApplied = false;

                // Remove the event listener to avoid multiple calls
                showNavbar.removeEventListener('animationend', handleAnimationEnd);
            });

            animationApplied = true;
        }
    } else {
        showNavbar.classList.add("animate__fadeOutUp");
        showNavbar.classList.remove("animate__fadeInDown");

        // Reset the animationApplied flag when user scrolls back to the top
        animationApplied = false;
    }

    function handleLeftRightAnimation() {
        if (scrollHeight >= viewportHeight ) {
            leftElement.classList.add('animate__fadeInLeft');
            rightElement.classList.add('animate__fadeInRight');
            console.log("if");
        } else {
            leftElement.classList.remove('animate__fadeInLeft');
            rightElement.classList.remove('animate__fadeInRight');
            console.log("else");
        }
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



const lines = document.querySelectorAll('.potential-div p span');

// Set initial visibility and opacity for each line
lines.forEach((line, index) => {
    gsap.set(line, { y: '100%', autoAlpha: 0 });
});

// Use GSAP to animate each line
gsap.timeline({
    scrollTrigger: {
        trigger: '.potential-div',
        start: 'top center',
    }
})
    .staggerTo(lines, 1, { y: '0%', autoAlpha: 1, ease: 'power2.out' }, 0.5);










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


// type animation type animation type animation type animation type animation 

// const typedTextSpan = document.querySelector(".typed-text");
// const cursorSpan = document.querySelector(".cursor");

// const textArray = ["Online-program", "Offline-program", "one-on-one", "Customised group"];
// const typingDelay = 200;
// const erasingDelay = 100;
// const newTextDelay = 2000; // Delay between current and next text
// let textArrayIndex = 0;
// let charIndex = 0;

// function type() {
//   if (charIndex < textArray[textArrayIndex].length) {
//     if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
//     typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
//     charIndex++;
//     setTimeout(type, typingDelay);
//   } 
//   else {
//     cursorSpan.classList.remove("typing");
//   	setTimeout(erase, newTextDelay);
//   }
// }

// function erase() {
// 	if (charIndex > 0) {
//     if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
//     typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
//     charIndex--;
//     setTimeout(erase, erasingDelay);
//   } 
//   else {
//     cursorSpan.classList.remove("typing");
//     textArrayIndex++;
//     if(textArrayIndex>=textArray.length) textArrayIndex=0;
//     setTimeout(type, typingDelay + 1100);
//   }
// }

// document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
//   if(textArray.length) setTimeout(type, newTextDelay + 250);
// });



// document.addEventListener("DOMContentLoaded", function () {
//     const slider = document.querySelector('.slider');
//     const slides = document.querySelectorAll('.slider .therapy-inner-div');

//     let index = 0;

//     function showNextSlide() {
//         slides.forEach((slide) => {
//             slide.style.display = 'none';
//         });

//         index = (index + 1) % slides.length;
//         slides[index].style.display = 'block';
//     }

//     // Initial setup
//     slides.forEach((slide, i) => {
//         slide.style.display = i === 0 ? 'block' : 'none';
//     });

//     setInterval(showNextSlide, 2000); // Change slide every 2000 milliseconds (2 seconds)
// });




// scroll feature vertical scroll feature vertical scroll feature vertical 


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

let sections = gsap.utils.toArray(".panel");

function goToSection(i) {
  gsap.to(window, {
    scrollTo: { y: i * innerHeight, autoKill: false, ease: "Power3.easeInOut" },
    duration: 1.5
  });
}

ScrollTrigger.defaults({
  // markers: true
});


sections.forEach((eachPanel, i) => {
  // const mainAnim = gsap.timeline({ paused: true });

  ScrollTrigger.create({
    trigger: eachPanel,
    onEnter: () => goToSection(i)
  });

  ScrollTrigger.create({
    trigger: eachPanel,
    start: "bottom bottom",
    onEnterBack: () => goToSection(i)
  });
});








