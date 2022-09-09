var array = [
  {
    isbn: '665',
    title: 'hello, Jackson',
    author: 'Lucy Lovett'
  },
  {
    isbn: '77779',
    title: 'You can do better',
    author: 'Neighbor Sal'
  },
  {
    isbn: 'nny4432',
    title: 'Where the Wild things are',
    author: 'Unknown'
  }
];

console.log('~ typeof array', typeof array, array);
console.log('stringify type of array:', typeof JSON.stringify(array), JSON.stringify(array));
var string = '{ "name": "Josh", "ID": "669987"}';
var object = JSON.parse(string);

// console.log('~ object', object);
// console.log('string', string);
// console.log('String - name - number:', typeof string, string);
console.log('Parsed string to object: typeof:', typeof object, object);
