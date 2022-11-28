/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (queue.peek() === undefined) {
    return;
  }
  let previous = Number(queue.dequeue());

  while (previous > Number(queue.peek())) {
    queue.enqueue(previous);
    const next = queue.dequeue();

    if (previous >= Number(queue.peek())) {
      previous = next;
    }
  }
  return previous;
}
