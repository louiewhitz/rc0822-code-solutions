var allSpan = document.querySelectorAll('span');

var current = 0;

document.addEventListener('keydown', keyDown);

function keyDown(event) {
  var pressedKey = event.key;

  if (pressedKey === allSpan[current].textContent) {
    current++;
    allSpan[current - 1].className = 'span correct';
    // allSpan[current].className = 'span active';
    var nextChar = allSpan[current + 1];
    if (nextChar !== true) {
      allSpan[current].className = 'span active';
    }

  } else if (pressedKey !== allSpan[current]) {
    allSpan[current].className = 'span incorrect';

    // current++;
    if (allSpan[current - 1] === pressedKey && allSpan[current - 1] === true) {
      allSpan[current - 1].className = 'span correct';
      allSpan[current].className = 'span active';
      current++;
    }
  }
}
