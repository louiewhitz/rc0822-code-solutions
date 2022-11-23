/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const insert = new LinkedList(value);

  const rest = list.next;

  list.next = insert;
  list.next.next = rest;
}
