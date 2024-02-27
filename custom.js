
// animation of navbar and brains animation of brains animation of navbar and brains 

const showNavbar = document.querySelector(".nav-section");
const programSection = document.querySelector(".program-section")
let animationApplied = false;

// Get viewport height (screen height)
var viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
console.log(viewportHeight,"viewportHeight")
// console.log(programSection);


document.addEventListener('scroll', function() {
    var scrollHeight = window.scrollY;
    console.log(scrollHeight)
    var leftElement = document.querySelector('.left');
    var rightElement = document.querySelector('.right');
    var centreElement = document.querySelector('.quote-center-effect')
       // Get the div element by its ID
       var myDiv = document.querySelector('.program-section');

       // Get the height of the div
       var divHeight = myDiv.clientHeight;

       // Log the height to the console or use it as needed
    //    console.log('Div Height:', divHeight);
//   console.log(scrollHeight)
    if (scrollHeight >= viewportHeight)  {
        if (!animationApplied) {
            showNavbar.classList.remove("animate__fadeOutUp");
            showNavbar.classList.add("nav-flex-1");
            showNavbar.classList.add("animate__fadeInDown");
            // programSection.classList.add("margin-top-100");
            showNavbar.addEventListener('animationend', function handleAnimationEnd() {
                // handleLeftRightAnimation();
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
        // programSection.classList.remove("margin-top-100");
        // Reset the animationApplied flag when user scrolls back to the top
        animationApplied = false;
    }
    // console.log()
    const leftHeight = viewportHeight+divHeight;
    // console.log(leftHeight,"left height")
    function handleLeftRightAnimation() {
        if (scrollHeight >= leftHeight ) {
            leftElement.classList.add('animate__fadeInLeft');
            rightElement.classList.add('animate__fadeInRight');
            centreElement.classList.add('animate__pulse');

            // console.log("if");
        } else {
            leftElement.classList.remove('animate__fadeInLeft');
            rightElement.classList.remove('animate__fadeInRight');
            centreElement.classList.remove('animate__pulse');

            // console.log("else");
        }
    }
    handleLeftRightAnimation();
});




// Toggle   Toggle  Toggle  Toggle  Toggle  Toggle  Toggle  Toggle 




const toggleMenu = document.querySelector(".toggle-menu")
const showBar = document.querySelector(".hiddenNavbar")
const navbarbtnflex = document.querySelector(".navbar-btn-flex") 
toggleMenu.addEventListener('click',()=>{
    console.log("hello")
    showBar.classList.toggle("showNavbar")
    navbarbtnflex.classList.toggle("changeColor")
});



// form submit form submit form submit form submit form submit 



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



// Testimonial section Testimonial section Testimonial section Testimonial section 



$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})




document.addEventListener('DOMContentLoaded', function () {
    var scrollButton = document.getElementById('contactButton');
    var targetDiv = document.getElementById('section1');

    scrollButton.addEventListener('click', function () {
        // Scroll to the target div smoothly
        targetDiv.scrollIntoView({ behavior: 'smooth' });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    var appointmentButton = document.getElementById('appointmentButton');

    appointmentButton.addEventListener('click', function () {
        // Redirect to contact.html when the button is clicked
        window.location.href = 'Contact.html';
    });
});