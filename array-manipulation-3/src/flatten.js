/* exported flatten */
function flatten(array) {
  // create a new array to put the flattened array into
  var flatArr = [];
  // loop through the array twice to get the singular elements
  for (var i = 0; i < array.length; i++) {
    var arr1 = array[i];
    // use the is array method, to save the values in the final array before continuing further
    if (!Array.isArray(arr1)) {
      flatArr.push(arr1);
      continue;
    }
    // do the second loop to get the values out of being in a nested array array
    for (var j = 0; j < arr1.length; j++) {
      var flat = arr1[j];
      // push the final values into the final array
      flatArr.push(flat);
    }
  }
  return flatArr;
}
