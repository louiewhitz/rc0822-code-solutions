function handleClick(event) {
  console.log('button clicked!');
  console.log(event);
  console.log(event.target);
}

var clickBtn = document.querySelector('.click-button');
clickBtn.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}
var hoverBtn = document.querySelector('.hover-button');
hoverBtn.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}

var dblClickBtn = document.querySelector('.double-click-button');
dblClickBtn.addEventListener('dblclick', handleDoubleClick);
