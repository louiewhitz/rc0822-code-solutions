/* exported ransomCase */
function ransomCase(string) {
  var ransom = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      var low = string[i].toLowerCase();
      ransom += low;
    } else if (i % 2 !== 0) {
      var high = string[i].toUpperCase();
      ransom += high;
    }
  }
  return ransom;
}

// assign a variable to an empty string
// transom means to change letter casing
// create a for loop into the word and every index mod 2 = 0 lowercase it
// for every index not divisible by 2 capitalize
// in each conditional, add the updated case to the final word
//  return the word
