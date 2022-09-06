var lightBulb = document.querySelector('.circle');
var bg = document.querySelector('.container');

lightBulb.addEventListener('click', lightSwitch);

function lightSwitch(event) {
  if (event.target.className === 'circle light') {
    lightBulb.className = 'circle dark';
    bg.className = 'container bg-dark';
  } else {
    lightBulb.className = 'circle light';
    bg.className = 'container bg-light';

  }

}
