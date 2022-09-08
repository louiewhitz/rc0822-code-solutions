/* exported difference */
function difference(first, second) {
  var arr = [];
  for (var i = 0; i < first.length; i++) {
    var firstWords = first[i];
    arr.push(firstWords);

    // console.log('~ firstWords', firstWords);

  }

  for (var j = 0; j < second.length; j++) {
    var secondWords = second[j];
    arr.push(secondWords);

    // console.log('~ secondWords', secondWords);
  }
  for (var x = 0; x < arr.length; x++) {
    // var char = arr[x];
    // for (var x = 0; );

  }

  // if (firstWords !== secondWords) {
  //   arr.push(firstWords);
  // }
  // if (secondWords !== firstWords) {
  //   arr.push(secondWords);
  //   console.log(arr);
  // }

  return arr;
}
