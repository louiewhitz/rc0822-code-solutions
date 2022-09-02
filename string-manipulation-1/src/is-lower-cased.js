/* exported isLowerCased */
function isLowerCased(word) {
  var lowercase = word.toLowerCase();
  if (word === lowercase) {
    return true;
  }
  return false;
}

// store a version of the parameter as lowercased
// check to all the words if they math, true if its all lowercased, false if not
