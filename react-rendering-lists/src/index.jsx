import React from 'react';
import ReactDOM from 'react-dom/client';
function Pokemon(props) {
  const pokedex = props.pokedex;
  const likey = pokedex.map(poke => <li key={poke.number}>{poke.name}</li>);
  return (<ul>{likey}</ul>);
}

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<Pokemon pokedex={ pokedex } />);
