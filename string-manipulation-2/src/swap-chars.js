/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var str = string.split('');
  var firstIn = str[firstIndex];
  var secondIn = str[secondIndex];
  str[firstIndex] = secondIn;
  str[secondIndex] = firstIn;
  return str.join('');

  // switch the first index with the second index
  // var arr = string.split('');
  // var first = arr[firstIndex];

  // arr[first] = secondIndex;

  // var newStr = arr.join('');

  // return newStr;

  // var newStr = '';
  // if (string[first]) {
  //   newStr = string[second];
  // }
  // var newWord = string[second] += string[first];
  // return newWord;

}
