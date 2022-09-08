/* exported equal */
function equal(first, second) {
  // check if length of both arrays are the same, if not return false
  if (first.length !== second.length) {
    return false;
  }

  // loop through one and compare the values at indexes
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }

  }

  return true;
}
