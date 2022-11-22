/* exported isEmpty */

function isEmpty(stack) {
  const end = stack.peek();
  if (end === undefined) {
    return true;
  }
  return false;
}
