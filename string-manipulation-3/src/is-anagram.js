/* exported isAnagram */
function isAnagram(firstString, secondString) {
  // first replace the comma with whitespace
  var str1arr = firstString.split(' ');
  var str1 = str1arr.join('');
  var str2arr = secondString.split(' ');
  var str2 = str2arr.join('');
  // check if length differs
  // sort each array
  var sort1 = str1.split('').sort();
  var sort2 = str2.split('').sort();

  //  create a loop and compare sorted arrays
  for (var i = 0; i < sort1.length; i++) {
    // check to see if they match with a conditional
    if (sort1[i] !== sort2[i]) {
      return false;
    }
  }
  return true;
}
