/* exported isVowel */
function isVowel(character) {
  var char = character[0];
  var vowel = ['a', 'A', 'e', 'E', 'I', 'i', 'O', 'o', 'u', 'U'];
  for (var i = 0; i < vowel.length; i++) {
    if (char === vowel[i]) {
      return true;
    }
  }
  return false;
}

// since character is only one instance, store it in a variable at 0
// create a variable named vowel and store all cap/not cap values in it within the array
// loop through the array and store each component in a variable
// create a second loop for the character and check
