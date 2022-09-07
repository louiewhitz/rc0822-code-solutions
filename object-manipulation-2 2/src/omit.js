/* exported omit */
function omit(source, keys) {
  // create an empty object
  var obj = {};
  // get the sourcekeys out of the source
  for (var sourceKeys in source) {
    for (var i = 0; i < sourceKeys.length; i++) {
      var property = sourceKeys;
    }
    // check to see if the keys array also has the sourceKey
    if (keys.includes(property) === false) {
      var value = source[property];
      // check for any edge cases like undefined

      if (value !== undefined) {
        // update the empty object
        obj[property] = value;
      }
    }
  // return the empty object
  }
  return obj;

  // loop through the source keys and save the result in a variable called property
}
