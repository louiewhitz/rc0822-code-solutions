/* exported getKeys */
function getKeys(object) {
  var array = [];
  for (var key in object) {
    var keys = key;
    array.push(keys);
  }
  return array;
}

// to get the keys in an object, you can use a for in loop
// then store the keys in a variable and return it
