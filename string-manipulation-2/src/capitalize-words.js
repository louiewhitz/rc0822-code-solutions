/* exported capitalizeWords */
function capitalizeWords(string) {
  var finalWord = '';
  var array = [];
  var lowerCaseArray = string.split(' ');
  for (var i = 0; i < lowerCaseArray.length; i++) {
    var cap = lowerCaseArray[i][0].toUpperCase();
    var lowerCaseWord = lowerCaseArray[i].slice(1).toLowerCase();
    finalWord = cap + lowerCaseWord;
    array.push(finalWord);
  }
  return array.join(' ');
}

//  split the words by white space
// lowercase all words to take care of all the words that are uppercase
// capitalize the first letter
// concatenate the words back together
