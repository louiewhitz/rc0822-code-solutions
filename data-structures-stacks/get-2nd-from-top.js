/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  const popped = stack.pop();
  const second = stack.peek();
  if (popped === undefined) return undefined;
  stack.push(popped);
  return (second);
}
