/* exported lastChars */
function lastChars(length, string) {
  if (length > string.length) {
    return string;
  }
  var last = string.slice(string.length - length);

  return last;

}

// return the last part of the string at the length given as the input
// use the slice method, starting at the input length
// store return into a variable and return variable
// watch for edge case of length being longer than string - conditional
