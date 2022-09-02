/* exported capitalize */
function capitalize(word) {
  var cap = word[0].toUpperCase();
  var rest = word.substring(1).toLowerCase();
  var result = cap + rest;
  return result;
}

// separate the first letter and capitalize it
// separate the rest of the word and lower case it
// concat them back together;
