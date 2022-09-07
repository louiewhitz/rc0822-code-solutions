/* exported defaults */
function defaults(target, source) {
  // find the keys in source
  // check if target has those keys or if it is undefined
  // add the keys to target if they don't already exist
  for (var keys in source) {
    var sourceKey = keys;
    var sourceVal = source[keys];
    if (target[sourceKey] === undefined) {
      target[sourceKey] = sourceVal;
    }
  }
}
