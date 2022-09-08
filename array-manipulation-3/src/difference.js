/* exported difference */
function difference(first, second) {
  // create an empty final array

  var output = [];
  // create a loop to loop through first
  // add the keys into final array
  for (var i = 0; i < first.length; i++) {
    var firstChar = first[i];
    output.push(firstChar);
  }
  // create a loop to loop through second
  for (var j = 0; j < second.length; j++) {
    var secondChar = second[j];
    // conditional check whether first can check the index of second
    // add values to final
    if (first.indexOf(secondChar) === -1) {
      output.push(secondChar);
      // check if index of final has more indexes than 1 or 0
    } else if (output.indexOf(secondChar) >= 0) {
      // remove it if it does
      var remove = output.indexOf(secondChar);
      output.splice(remove, 1);
    }
    // return the output
  } return output;
}
