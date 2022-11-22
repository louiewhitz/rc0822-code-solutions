/* exported takeTop */

function takeTop(stack) {
  if (stack === undefined) {
    return 'undefined';
  }
  return stack.pop();
}
