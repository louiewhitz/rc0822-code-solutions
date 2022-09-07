/* exported invert */
function invert(source) {
  // create an empty object to store the inverted keys and source
  var obj = {};
  // do a for in loop and save keys in a variable and get the values
  // set the value as a key into the new object and the key as a value
  // return the object
  for (var keys in source) {
    var value = source[keys];
    obj[value] = keys;
  }
  return obj;
}
