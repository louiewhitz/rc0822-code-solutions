/* exported intersection */
function intersection(first, second) {
  // create an empty array for the output
  var output = [];
  // loop one array
  for (var i = 0; i < first.length; i++) {
    // check whether the second array has any elements in the first
    if (second.includes(first[i])) {
      // push the result into the output
      output.push(first[i]);
    }
  }
  return output;
}
