/* exported union */
function union(first, second) {
  var output = [];
  // loop through first -> check if second has it then push first into final or if something doesn't match second, push the first into final
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i]) === true || !second.includes(first[i])) {
      output.push(first[i]);
    }
  }
  // } create another for loop for the second array
  // check if first does not equal something in second
  for (var j = 0; j < second.length; j++) {
    if (!first.includes(second[j])) {
      output.push(second[j]);
    }
  }
  return output;
}
