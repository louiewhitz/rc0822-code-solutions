/* exported maxValue */

function maxValue(stack) {
  if (!Number.isInteger(stack.peek())) {
    return -Infinity;
  }

  let big = stack.peek();

  while (Number.isInteger(stack.peek())) {
    const current = stack.pop();
    if (current > big) {
      big = current;
    }
  }
  return big;
}
