const url = 'https://jsonplaceholder.typicode.com/users';
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data));

fetch('https://pokeapi.co/api/v2/pokemon/1')
  .then(res => res.json())
  .then(bulbasaur => console.log(bulbasaur));
