/* exported titleCase */
function titleCase(string) {

  // JavaScript - hard code, Acronym Hard code, colon, letters to stay lower case, hyphen
  // 1. create an array with all words that should not be capitalized for a future conditional statement
  var notCap = ['a', 'an', 'and', 'at', 'but', 'by', 'for', 'in', 'nor', 'of', 'on', 'or', 'out', 'so', 'the', 'so', 'the', 'to', 'up', 'and', 'yet', 'as', 'per'];
  // 2. create an array of all words lowercased
  var wordArr = string.toLowerCase().split(' ');
  // 3. set up the colon edge case as a conditional and set to false, so you can refer to it incase a colon comes through the future word loop

  var colon = false;
  // add a index hyphen and make sure the next letter is capitalized

  for (var i = 0; i < wordArr.length; i++) {
    if (wordArr[i] === 'javascript:') {
      wordArr[i] = 'JavaScript:';
    }
    // hard code without colon
    if (wordArr[i] === 'javascript') {
      wordArr[i] = 'JavaScript';
    }

    // conditional for acronym to keep uppercase
    if (wordArr[i] === 'api') {
      wordArr[i] = 'API';
    }
    // conditional that checks array of lower cased letters and colon

    if (notCap.indexOf(wordArr[i]) === -1 || i === 0 || colon) {
      wordArr[i] = wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1);
      colon = false;
    }
    // find index of colon, make it true to have upperCase ^^
    if (wordArr[i].indexOf(':') !== -1) {
      colon = true;
    }
    // find index of hyphen, and manage that the next loop will upper case the next letter after the hyphen
    // return the final sentence back into a string with array join
    if (wordArr[i].indexOf('-') !== -1) {
      var IndexHyphen = wordArr[i].indexOf('-');
      wordArr[i] = wordArr[i].split('-')[0] + '-' + wordArr[i][IndexHyphen + 1].toUpperCase() + wordArr[i].slice(IndexHyphen + 2).toLowerCase();
    }
  }
  return wordArr.join(' ');

}
