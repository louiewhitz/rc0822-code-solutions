/* exported chunk */
function chunk(array, size) {
  var newArr = [];
  var chunk = [];
  for (var i = 0; i < array.length; i++) {
    var input = array[i];
    var chunkLength = i + 1;
    chunk.push(input);
    if (chunkLength % size === 0) {
      newArr.push(chunk);
      chunk = [];

    }
  }
  if (chunk.length > 0) {
    newArr.push(chunk);
  }
  return newArr;
}

// store the size parameter into a variable
