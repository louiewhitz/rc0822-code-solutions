/* exported difference */
function difference(first, second) {
  // create an empty final array
  var arr = [];
  var final = [];
  for (var i = 0; i < first.length; i++) {
    var firstWords = first[i];
    arr.push(firstWords);

    // console.log('~ firstWords', firstWords);

  }

  for (var j = 0; j < second.length; j++) {
    // var secondWords = second[j];
  //   if (first.indexOf(secondWords) === -1) {
  //  }

    // console.log('~ secondWords', secondWords);
  }
  // console.log('arr', arr);
  // for (var x = 0; x < arr.length; x++) {
  //   var char = arr[x];
  //   for (var y = 0; y < arr.length; y++) {
  //     if (!final.includes(char)) {
  //       final.push(char);

  //       console.log('~ final', final);
  //     }
  //   }
  // }

  // if (firstWords !== secondWords) {
  //   arr.push(firstWords);
  // }
  // if (secondWords !== firstWords) {
  //   arr.push(secondWords);
  //   console.log(arr);
  // }

  return final;
}
