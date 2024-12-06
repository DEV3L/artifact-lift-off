let carouselIndex = 0;
let carouselInterval;

const nextSlide = (currentIndex) => {
  clearTimeout(carouselInterval);
  showSlide(currentIndex + 1);
};

const showSlide = (index) => {
  const slides = document.getElementsByClassName("carousel");

  let slideIndex = (index + slides.length) % slides.length;

  Array.from(slides).forEach((slide) => {
    slide.style.display = "none";
    slide.style.opacity = "0";
  });
  slides[slideIndex].style.display = "block";
  slides[slideIndex].style.opacity = "1";
};

const carousel = () => {
  const slides = document.getElementsByClassName("carousel");

  if (slides.length === 0) {
    console.warn("No carousel elements found.");
    return;
  }

  Array.from(slides).forEach((slide) => {
    slide.style.opacity = "0";
    slide.style.display = "none";
  });

  carouselIndex = (carouselIndex + 1) % slides.length;
  slides[carouselIndex].style.display = "block";
  slides[carouselIndex].style.opacity = "1";

  carouselInterval = setTimeout(carousel, 10000);
};
carousel();
