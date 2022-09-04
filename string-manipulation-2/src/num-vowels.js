/* exported numVowels */
function numVowels(string) {
  var count = 0;

  var vowels = ['a', 'A', 'e', 'E', 'I', 'i', 'o', 'O', 'u', 'U'];
  for (var i = 0; i < string.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      var vowel = vowels[j];
      var letter = string[i];
      if (letter === vowel) {
        count += 1;
      }
    }

  }
  return count;

}

// add together the number of vowels in a string
// create a vowels array and loop through both the string and the array
// update the count
// return count
