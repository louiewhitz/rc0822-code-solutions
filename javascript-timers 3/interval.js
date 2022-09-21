var h1 = document.querySelector('.countdown-display');
var myInterval = setInterval(change, 1000);
function stop() {
  clearInterval(myInterval);
}
var count = 4;
function change(display) {
  count--;
  if (count > 0) {
    h1.textContent = count;
  } else if (count === 0) {
    h1.textContent = '~Earth Beeeelooowww Us~';
    stop();
  }
}
