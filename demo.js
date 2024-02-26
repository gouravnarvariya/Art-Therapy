// document.addEventListener("DOMContentLoaded", function () {
//     const typedTextSpan = document.getElementById("typedText");
//     const cursorSpan = document.querySelector(".cursor");
  
//     const textArray = [
//       "Tap into your potential",
//       "Unlock your emotional power",
//       "Master your gift",
//       "Bring excellence to your work"
//     ];
  
//     const typingDelay = 200;
//     const erasingDelay = 100;
//     const newTextDelay = 2000;
  
//     let textArrayIndex = 0;
//     let wordIndex = 0;
  
//     function type() {
//       const currentWord = getCurrentWord();
//       if (currentWord !== undefined) {
//         if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
//         const textColorClass = isRedText(currentWord) ? "red-text" : "";
//         typedTextSpan.innerHTML += `<span class="${textColorClass}">${currentWord}</span> `;
//         wordIndex++;
//         setTimeout(type, typingDelay);
//       } else {
//         cursorSpan.classList.remove("typing");
//         setTimeout(erase, newTextDelay);
//       }
//     }
//     function erase() {
//         const typedWords = typedTextSpan.querySelectorAll("span");
//         const lastTypedWord = typedWords[typedWords.length - 1];
        
//         if (lastTypedWord) {
//             if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
//             lastTypedWord.remove(); // Remove the last typed word
//             wordIndex--;
//             setTimeout(erase, erasingDelay);
//         } else {
//             cursorSpan.classList.remove("typing");
//             wordIndex = 0; // Reset wordIndex to start typing the next sentence
//             textArrayIndex++;
//             if (textArrayIndex >= textArray.length) textArrayIndex = 0;
//             setTimeout(type, typingDelay + 1100);
//         }
//     }
      
  
//     function getCurrentWord() {
//       const words = textArray[textArrayIndex].split(" ");
//       return words[wordIndex];
//     }
  
//     function isRedText(word) {
//       const redWords = ["potential", "emotional", "gift", "excellence"];
//       return redWords.includes(word.toLowerCase());
//     }
  
//     // Start the typing effect
//     if (textArray.length) setTimeout(type, newTextDelay + 250);
//   });
  

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})