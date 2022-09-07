/* exported includes */
function includes(array, value) {
  // do a for loop through the array
  // set a conditional for whether the value exists
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
