var button = document.getElementById("colorButton");

button.addEventListener("click", function() {
    var body = document.body;
    
    if (body.style.backgroundColor === "black") {
        body.style.backgroundColor = "white";
        body.style.color = "black";

    } else {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    }
    
});

var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 2000); // Set interval for 2 seconds

function nextSlide() {
    changeSlide(1);
}

function changeSlide(n) {
    var slides = document.getElementsByClassName("slide");
    currentSlide += n;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    updateSlider();
}

function updateSlider() {
    var slider = document.getElementById("slider");
    var slideWidth = document.querySelector(".slide").offsetWidth;
    var newTransformValue = -currentSlide * (slideWidth + 20) + "px"; // 20 is the margin-right
    slider.style.transform = "translateX(" + newTransformValue + ")";
}

// Pause slideshow when hovering over the slider
document.getElementById("slider").addEventListener("mouseover", function() {
    clearInterval(slideInterval);
});

// Resume slideshow when mouse leaves the slider
document.getElementById("slider").addEventListener("mouseout", function() {
    slideInterval = setInterval(nextSlide, 2000);
});