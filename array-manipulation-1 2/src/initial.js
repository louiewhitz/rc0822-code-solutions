/* exported initial */
function initial(array) {
  var arr = [];
  for (var i = 0; i < array.length - 1; i++) {
    arr.push(array[i]);
  }
  return arr;
}

// cannot use splice or slice
// create an empty array
// return everything but the last index in array
// loop through the array yet set the length to the number of loops you want the function to run
// push the items into the new array and return it from the function
