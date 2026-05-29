const carousels = {
  menu: {
    container: document.getElementById("carousel-menu"),
    index: 0
  },
  event: {
    container: document.getElementById("carousel-event"),
    index: 0
  }
};

const visibleItems = 3;

function updateCarousel(target) {
  const carousel = carousels[target];
  const items = carousel.container.querySelectorAll(".item");
  const totalItems = items.length;
  const itemWidth = items[0].offsetWidth + 20;

  if (carousel.index < 0) carousel.index = 0;
  if (carousel.index > totalItems - visibleItems) {
    carousel.index = totalItems - visibleItems;
  }

  carousel.container.style.transform = `translateX(-${carousel.index * itemWidth}px)`;
}

function nextSlide(target) {
  carousels[target].index++;
  updateCarousel(target);
}

function prevSlide(target) {
  carousels[target].index--;
  updateCarousel(target);
}

window.addEventListener("resize", () => {
  updateCarousel("menu");
  updateCarousel("event");
});
