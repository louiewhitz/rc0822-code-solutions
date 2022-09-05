/* exported capitalizeWord */
function capitalizeWord(word) {
  var string = word.toLowerCase();
  if (string === 'javascript') {
    string = 'JavaScript';
  } else {
    var cap = word[0].toUpperCase();
    var low = word.slice(1).toLowerCase();

    string = cap + low;
  }
  return string;
}

// first validate the javascript edge case by hardcoding it to JavaScript
// split the the first letter from the rest of the word and capitalize it
// store the rest of the word in a variable and lowercase it
// concat the word back together and return it
