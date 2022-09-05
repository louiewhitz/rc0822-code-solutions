/* exported compact */
function compact(array) {
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    var single = array[i];

    if (single) {
      arr.push(single);
    }
  }
  return arr;
}

// according to the test, we should remove all the falsey values from the array
// loop through the array, and return truthy values
