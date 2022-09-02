/* exported getWords */
function getWords(string) {
  var word = string.split(' ');

  if (string === '') {
    return [];
  } else {
    return word;
  }
}
// use a method that splits by white space
// the edge case is there is no word, so create a check for only a space, and return empty brackets if that is true
// return the singular word
