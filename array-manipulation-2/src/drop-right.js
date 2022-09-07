/* exported dropRight */
function dropRight(array, count) {
  // use the slice method starting at zero and go backwards by setting the count number to a negative
  // return the new array
  var arr = array.slice(0, -count);

  return arr;

}
