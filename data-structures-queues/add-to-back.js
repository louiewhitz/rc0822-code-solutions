/* exported addToBack */

function addToBack(queue, value) {
  if (value === undefined) {
    return undefined;
  }
  return queue.enqueue(value);
}
