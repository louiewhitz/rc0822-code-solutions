/* exported toObject */
function toObject(keyValuePair) {
  var obj = {};
  var key = keyValuePair[0];
  var value = keyValuePair[1];
  obj[key] = value;
  return obj;
}

// in order to set the key value pairs, you can use both arguments as a key and a value that is technically in an array then add as a keyValue pair in an object;
