var message = document.querySelector('.message');
var myInterval = setTimeout(myFunc, 2000);
function stopFunction() {
  clearTimeout(myInterval);
}
function myFunc(display) {
  message.textContent = 'Hello There';
  stopFunction();
}
