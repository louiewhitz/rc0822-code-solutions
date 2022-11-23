/* exported swapFront */

function swapFront(list) {
  if (list.next === null) {
    return list;
  }
  const firstVal = list.data;

  const secondVal = list.next.data;

  if (list.next.data === secondVal) {
    list.data = secondVal;

    list.next.data = firstVal;
  }
  return list;
}
