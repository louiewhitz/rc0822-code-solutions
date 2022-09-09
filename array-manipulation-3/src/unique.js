/* exported unique */
function unique(array) {
  var uniqueArr = [];
  // do a loop through the array
  for (var i = 0; i < array.length; i++) {
    // save the array[i] into a variable and do a second loop to check for duplicates
    var char = array[i];

    for (var j = 0; j < array.length; j++) {
      // use the includes method as a conditional, and if its false, push the value into the array
      if (!uniqueArr.includes(char)) {
        uniqueArr.push(char);
      }
    }
  } return uniqueArr;
}
