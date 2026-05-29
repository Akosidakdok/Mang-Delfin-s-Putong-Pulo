let currentIndex = 0;
const carousel = document.getElementById("carousel");
const items = document.querySelectorAll(".carousel .item");
const visibleItems = 3;

function updateCarousel() {
  const totalItems = items.length;
  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex > totalItems - visibleItems) {
    currentIndex = totalItems - visibleItems;
  }
  carousel.style.transform = `translateX(-${(currentIndex * (items[0].offsetWidth + 20))}px)`;
}

function nextSlide() {
  currentIndex++;
  updateCarousel();
}

function prevSlide() {
  currentIndex--;
  updateCarousel();
}

window.addEventListener('resize', updateCarousel);
