/* exported pick */
function pick(source, keys) {
  // create an empty object and store it in a variable
  var object = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var value = source[key];
    if (value !== undefined) {
      object[key] = value;
    }

  }
  return object;

  // loop through the provided keys array
  // set the value of the keys[i] to a variable
  // get the value from the source[key]
  // make sure it is not undefined
  // update the empty object with the data set
  // check if they match
  // if they match, add the matching keys into the object, and set the value
}
