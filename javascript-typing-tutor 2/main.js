var allSpan = document.querySelectorAll('span');
// var textBox = document.querySelector('.input');
// var inputNode = textBox.childNodes;

var current = 0;

document.addEventListener('keydown', keyDown);

function keyDown(event) {
  var pressedKey = event.key;
  if (pressedKey === allSpan[current].textContent) {
    current++;

    allSpan[current - 1].className = 'span correct';
    if (allSpan[current].textContent !== pressedKey) {
      allSpan[current].className = 'span active';
    }
  } else if (pressedKey !== allSpan[current]) {
    allSpan[current - 1].className = 'span incorrect';
    allSpan[current].className = 'span';
    // current++;
    if (allSpan[current - 1] === pressedKey && allSpan[current - 1] === true) {
      allSpan[current - 1].className = 'span correct';
      allSpan[current].className = 'span active';
      current++;
    }
  }
}
