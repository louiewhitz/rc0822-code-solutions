/* exported isPalindromic */
function isPalindromic(string) {
  // split the string into an array to get rid of white space then turn it back into a string

  var array = string.split(' ');
  var str = array.join('');
  // find the middle using the math.Floor method
  var mid = Math.floor(str.length / 2);
  // find the first and second half without the middle index
  var rightHalf = str.substring(mid + 1);
  var leftHalf = str.substring(0, mid);
  // sort them in alphabetical order
  var sortRight = rightHalf.split('').sort();
  var sortLeft = leftHalf.split('').sort();
  // create a loop with either half of the string
  // check to make sure the values at the indexes are equal
  for (var i = 0; i < sortLeft.length; i++) {
    if (sortLeft[i] !== sortRight[i]) {
      return false;
    }
  } return true;

}
