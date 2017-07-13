'use strict'

$(function() {
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    })
   // $(document).on("scroll", onScroll);
})

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
}

// function onScroll(event){
//     var scrollPos = $(document).scrollTop();

//     if (scrollPos > 10) {
//       $('.navbar-fixed-top').addClass("navLine");
//       $('#menu-center ul img').addClass("smallImg")
//     } else {
//       $('.navbar-fixed-top').removeClass("navLine");
//       $('#menu-center ul img').removeClass("smallImg")
//     }
// }