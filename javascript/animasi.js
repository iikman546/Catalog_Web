const slides = document.querySelectorAll(".ad-slide");
const prevButton = document.querySelector(".ad-prev");
const nextButton = document.querySelector(".ad-next");

let currentSlide = 0;
let slideTimer;

function showSlide(index) {
    slides[currentSlide].classList.remove("active");

    currentSlide = (index + slides.length) % slides.length;

    slides[currentSlide].classList.add("active");
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function startAutoSlide() {
    clearInterval(slideTimer);

    slideTimer = setInterval(() => {
        nextSlide();
    }, 4000);
}

nextButton.addEventListener("click", () => {
    nextSlide();
    startAutoSlide();
});

prevButton.addEventListener("click", () => {
    prevSlide();
    startAutoSlide();
});

startAutoSlide();