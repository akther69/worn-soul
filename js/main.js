// =========================
// MOBILE MENU
// =========================

const menuBtn = document.getElementById("menu-btn");

const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("hidden");

});

// =========================
// HERO SLIDER
// =========================

const slider = document.getElementById("slider");

let currentSlide = 0;

const totalSlides = 3;

setInterval(() => {

    currentSlide++;

    if(currentSlide >= totalSlides){

        currentSlide = 0;

    }

    slider.style.transform = `translateX(-${currentSlide * 100}%)`;

}, 4000);

// =========================
// AOS
// =========================

AOS.init({

    duration:1000,
    once:true

});