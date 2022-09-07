var $name = document.forms[0].name;
var $email = document.forms[0].email;
var $message = document.forms[0].message;
// add event listeners
$name.addEventListener('focus', handleFocus);
$name.addEventListener('blur', handleBlur);
$name.addEventListener('input', handleInput);
$email.addEventListener('focus', handleFocus);
$email.addEventListener('blur', handleBlur);
$email.addEventListener('input', handleInput);
$message.addEventListener('focus', handleFocus);
$message.addEventListener('blur', handleBlur);
$message.addEventListener('input', handleInput);

function handleFocus(event) {

  console.log('Focus Event has fired');
  console.log('event.target.name', event.target.name);

}
function handleBlur(event) {
  console.log('Blur Event has fired');
  console.log('event.target.name', event.target.name);

}
function handleInput(event) {
  console.log('Value of Name:', event.target.name, event.target.value);
}
