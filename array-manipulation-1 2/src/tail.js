/* exported tail */
function tail(array) {
  var arr = [];
  for (var i = 1; i < array.length; i++) {
    arr.push(array[i]);
  }
  return arr;
}

// first, separate the first index of the array from the remaining values
// create an empty array to store the values
// loop through the array and start at index 1
// push the values into a new array
