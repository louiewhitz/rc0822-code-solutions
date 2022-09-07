/* exported takeRight */
function takeRight(array, count) {
  // return the last two elements of an array using the slice method and starting from the last index going inward with the value of count
  var arr = array.slice(-count);

  return arr;

}
