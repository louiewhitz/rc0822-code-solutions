/* exported zip */
function zip(first, second) {
  // create a conditional that makes sure both arrays are the same size

  var short = null;
  var final = [];
  if (first.length < second.length || first.length === second.length) {
    short = first.length;
  } else if (second.length < first.length) {
    short = second.length;
  }
  // loop through one array, and set the start at 0; set the loop to the combined length both arrays share

  for (var i = 0; i < short; i++) {
    // create a new array to save both values from each loop and push them

    var current = [];
    current.push(first[i]);
    current.push(second[i]);
    // finally, push the current array and return it
    final.push(current);
  }
  return final;
}
