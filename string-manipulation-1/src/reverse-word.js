/* exported reverseWord */
function reverseWord(word) {
  var reverse = '';
  for (var i = word.length - 1; i >= 0; i--) {
    var letter = word[i];

    reverse += letter;

  }
  return reverse;
}
// create an empty string called reverse which will store the new word later
// use a for loop to loop through the string back words and store it in a variable
// concat the letters into the empty reversed word return the reversed word
