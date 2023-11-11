const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const slides = document.querySelectorAll(".our-team__slid");
const dots = document.querySelectorAll(".indicator-dots .dot");

let currentSlide = 0;

function showSlide(n) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
  slides[n].classList.add("active");
  dots[n].classList.add("active");
}

prevBtn.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

nextBtn.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
    currentSlide = index;
  });
});
