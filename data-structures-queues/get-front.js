/* exported getFront */

function getFront(queue) {
  const peeked = queue.peek();
  if (peeked === undefined) {
    return undefined;
  }
  return peeked;
}
