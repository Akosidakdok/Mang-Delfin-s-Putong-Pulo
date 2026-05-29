const images = document.querySelectorAll('.carousel-image');
let index = 0;

function nextImage() {
  images[index].classList.remove('active');
  index = (index + 1) % images.length;
  images[index].classList.add('active');
}

setInterval(nextImage, 3000);
