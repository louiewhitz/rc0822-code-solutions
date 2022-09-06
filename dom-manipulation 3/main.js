var button = document.querySelector('.hot-button');
var clicks = 0;

var count = document.querySelector('.click-count');

button.addEventListener('click', change);

function change(e) {
  clicks++;
  var temp = null;
  if (clicks < 4) {
    temp = 'cold';
  } else if (clicks < 8) {
    temp = 'cool';
  } else if (clicks < 10) {
    temp = 'tepid';
  } else if (clicks < 12) {
    temp = 'warm';
  } else if (clicks < 14) {
    temp = 'hot';
  } else {
    temp = 'nuclear';
  }
  button.className = 'hot-button ' + temp;
  count.textContent = 'Clicks:' + clicks;
}
