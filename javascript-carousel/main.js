
var dots = document.querySelectorAll('.fa-circle');
var arrowRight = document.querySelector('.fa-chevron-right');
var arrowLeft = document.querySelector('.fa-chevron-left');
var dotContainer = document.querySelector('.dot-full-container');
var images = document.querySelectorAll('.carousel-img');

var myIntervalId = setInterval(changeImg, 3000);

var count = 0;
function resetInterval() {
  clearInterval(myIntervalId);
  myIntervalId = setInterval(changeImg, 3000);
}

dotContainer.addEventListener('click', dotClick);
arrowLeft.addEventListener('click', arrowFunction);
arrowRight.addEventListener('click', arrowFunction);

function changeImg() {
  if (count === images.length - 1) {
    displayFirst();
  } else if (count >= 0) {
    images[count].className = 'carousel-img hidden';
    dots[count].className = 'fa-regular fa-circle';
    count++;
    images[count].className = 'carousel-img show';
    dots[count].className = 'fa-solid fa-circle';
  }
}

function displayFirst() {
  images[count].className = 'carousel-img hidden';
  dots[count].className = 'fa-regular fa-circle';
  count = 0;
  images[count].className = 'carousel-img show';
  dots[count].className = 'fa-solid fa-circle';
}

function arrowFunction(event) {
  if (event.target.className.includes('right')) {
    changeImg();
  } else if (event.target.className.includes('left')) {
    previousImg();
    resetInterval();
  }
}

function previousImg() {
  if (count === 0) {
    displayLast();
  } else {
    images[count].className = 'carousel-img hidden';
    dots[count].className = 'fa-regular fa-circle';
    count--;
    images[count].className = 'carousel-img';
    dots[count].className = 'fa-solid fa-circle';
  }
}

function displayLast() {
  images[count].className = 'carousel-img hidden';
  dots[count].className = 'fa-regular fa-circle';
  count = images.length - 1;
  images[count].className = 'carousel-img show';
  dots[count].className = 'fa-solid fa-circle';
}

function dotClick(event) {
  if (event.target.matches('I')) {
    images[count].className = 'carousel-img hidden';
    dots[count].className = 'fa-regular fa-circle';
    var clicked = event.target.getAttribute('data-circle');
    count = clicked - 1;
    images[count].className = 'carousel-image show';
    dots[count].className = 'fa-solid fa-circle';
    resetInterval();
  }
}
