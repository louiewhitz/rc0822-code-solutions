/* exported takeSmaller */

function takeSmaller(queue) {
  const firstVal = queue.dequeue();
  if (firstVal === undefined) {
    return undefined;
  }
  const secondVal = queue.dequeue();
  if (secondVal === undefined) {
    return firstVal;
  }
  if (firstVal < secondVal) {
    queue.enqueue(secondVal);
    return firstVal;
  } else {
    queue.enqueue(firstVal);
    return secondVal;
  }
}
