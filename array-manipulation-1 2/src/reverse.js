/* exported reverse */
function reverse(array) {
  var arr = [];
  for (var i = array.length - 1; i >= 0; i--) {
    arr.push(array[i]);
  }
  return arr;
}

// in this case, we can create a loop that counts backwards, then push the resulting values into the new array
