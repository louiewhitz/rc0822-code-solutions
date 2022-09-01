/* exported oddOrEven */
function oddOrEven(numbers) {
  var arr = [];
  var odd = 'odd';
  var even = 'even';
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      arr.push(even);
    } else if (numbers[i] % 2 !== 0) {
      arr.push(odd);
    }
  }
  return arr;
}
