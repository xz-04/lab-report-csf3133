/* =====================================
   AUTOMATIC SLIDESHOW (Activity 1.4)
===================================== */

let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Move to next slide
    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Show current slide
    slides[slideIndex - 1].style.display = "block";

    // Change slide every 3 seconds
    setTimeout(showSlides, 3000);
}

// Start slideshow
showSlides();


/* =====================================
   PROGRESS BAR (Activity 1.6)
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    const progressBar = document.getElementById("progress-bar");
    const increaseButton = document.getElementById("increase-progress");
    let progress = 0;

    increaseButton.addEventListener("click", function () {
        if (progress < 100) {
            progress += 10;   // increase by 10%
            progressBar.style.width = progress + "%";
        } else {
            alert("Progress is complete!");
        }
    });


    /* =====================================
       COLLAPSIBLE SECTION (Activity 1.7)
    ===================================== */

    const collapsibleButton = document.querySelector(".collapsible");
    const content = document.querySelector(".content");

    collapsibleButton.addEventListener("click", function () {
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });

});
