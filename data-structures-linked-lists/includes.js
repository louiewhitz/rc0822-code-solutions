/* exported includes */

function includes(list, value) {
  if (list.data === value) {
    return true;
  }
  while (list.data !== value) {
    list = list.next;

    if (list.data === value) {
      return true;
    } else if (list.next === null) {
      return false;
    }
  }
}
