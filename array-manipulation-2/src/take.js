/* exported take */
function take(array, count) {
  // create an variable to store the new values after using the slice method
  // store count as the number that should be taken from the beginning of the array

  var newArr = array.slice(0, count);
  return newArr;
}
