/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() !== undefined) {
    let count = index;
    while (count > 0) {
      const val = queue.dequeue();
      queue.enqueue(val);
      count--;
    }
    const remove = queue.dequeue();
    return remove;
  }
}
