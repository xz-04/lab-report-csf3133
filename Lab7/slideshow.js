let slideIndex = 0;
function showSlides() {
    let slides = document.getElementsByClassName("slide");
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // Increment the slide index
    slideIndex++;
// Reset to the first slide if the index exceeds the number of slides
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    // Display the current slide
    slides[slideIndex - 1].style.display = "block";
    // Call this function again after 4 seconds
    setTimeout(showSlides, 4000);
}
// Initialize the slideshow
showSlides();