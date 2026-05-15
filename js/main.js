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

// ================= TESTIMONIAL SLIDER =================

const testimonialSlider = document.getElementById("testimonial-slider");

const indicators = document.querySelectorAll(".indicator");

if (testimonialSlider) {

  testimonialSlider.addEventListener("scroll", () => {

    const scrollLeft = testimonialSlider.scrollLeft;

    const cardWidth = 340;

    const index = Math.round(scrollLeft / cardWidth);

    indicators.forEach((indicator, i) => {

      if (i === index) {

        indicator.classList.remove("w-7", "bg-gray-500");

        indicator.classList.add("w-14", "bg-white", "shadow-lg");

      } else {

        indicator.classList.remove("w-14", "bg-white", "shadow-lg");

        indicator.classList.add("w-7", "bg-gray-500");

      }

    });

  });

}

// ================= NEW ARRIVAL SLIDER =================

const newArrivalSlider = document.getElementById("new-arrival-slider");

const newIndicators = document.querySelectorAll(".new-indicator");

if (newArrivalSlider) {

  newArrivalSlider.addEventListener("scroll", () => {

    const scrollLeft = newArrivalSlider.scrollLeft;

    const cardWidth = 320;

    const index = Math.round(scrollLeft / cardWidth);

    newIndicators.forEach((indicator, i) => {

      if (i === index) {

        indicator.classList.remove("w-7", "bg-gray-500");

        indicator.classList.add("w-14", "bg-white", "shadow-lg");

      } else {

        indicator.classList.remove("w-14", "bg-white", "shadow-lg");

        indicator.classList.add("w-7", "bg-gray-500");

      }

    });

  });

}


// ================= BEST SELLER SLIDER =================

const bestSellerSlider = document.getElementById("best-seller-slider");

const bestIndicators = document.querySelectorAll(".best-indicator");

if (bestSellerSlider) {

  bestSellerSlider.addEventListener("scroll", () => {

    const scrollLeft = bestSellerSlider.scrollLeft;

    const cardWidth = 380;

    const index = Math.round(scrollLeft / cardWidth);

    bestIndicators.forEach((indicator, i) => {

      if (i === index) {

        indicator.classList.remove("w-7", "bg-gray-500");

        indicator.classList.add("w-14", "bg-white", "shadow-lg");

      } else {

        indicator.classList.remove("w-14", "bg-white", "shadow-lg");

        indicator.classList.add("w-7", "bg-gray-500");

      }

    });

  });

}