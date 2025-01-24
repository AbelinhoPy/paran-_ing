let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function moveSlide(step) {
  currentSlide = (currentSlide + step + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Cambio automático de imágenes cada 5 segundos
setInterval(() => {
  moveSlide(1);
}, 5000);
