const toggleMenu = document.querySelector(".toggle-menu")
const showBar = document.querySelector(".hiddenNavbar")
const navbarbtnflex = document.querySelector(".navbar-btn-flex") 
toggleMenu.addEventListener('click',()=>{
    console.log("hello")
    showBar.classList.toggle("showNavbar")
    navbarbtnflex.classList.toggle("changeColor")
})

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

document.addEventListener('scroll', function() {
    var scrollHeight = window.scrollY;
    console.log(scrollHeight)
    if (scrollHeight >= 800) {
      document.querySelector('.left').classList.add('animate__slideInLeft');
      document.querySelector('.right').classList.add('animate__slideInRight');

    } else {
        document.querySelector('.left').classList.remove('animate__slideInLeft');
        document.querySelector('.right').classList.remove('animate__slideInRight');
    }
  });