/* exported truncate */
function truncate(length, string) {
  var input = length;
  var output = string.slice(0, input) + '...';
  return output;
}

// assign the length argument to a variable;
// use the slice method on the string argument beginning at index 0 and then the length as the input variable
// save the result in a variable
// return the variable
