/* exported reverseWords */
function reverseWords(string) {
  // create a variable with an empty string;
  // create an empty array
  var arr = [];
  // split the sentence by whitespace
  var strArr = string.split(' ');

  // create a four loop and save the index to a variable
  for (var i = 0; i < strArr.length; i++) {
    // use the reverse method backwards through the singular index
    // join the words back into single word and push into new array
    var wordIndex = strArr[i].split('').reverse().join('');
    arr.push(wordIndex);
    // join array with whitespace
    var final = arr.join(' ');

  }

  // return the final sentence
  return final;

}
