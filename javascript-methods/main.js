/* eslint-disable no-unused-vars */
var num1 = 10;
var num2 = 22;
var num3 = 25;

var maximumValue = Math.max(num1, num2, num3);
var heroes = ['Black Widow', 'Iron Man ', 'Thor', 'Batman'];
var randomNumber = Math.floor(Math.random() * heroes.length);
var randomIndex = Math.floor(randomNumber);
var randomHero = heroes[randomIndex];
var library = [{
  title: 'Harry Potter 1',
  author: 'J.K. Rowling'
},
{
  title: 'I love you',
  author: 'Lulu'

},
{
  title: 'who let the dogs out',
  author: 'Elvis?'
}
];

var lastBook = library.pop();

var firstBook = library.shift();
var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('library:', library);

var fullName = 'Louisa Whitaker';

var firstAndLastName = fullName.split(' ');
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();

console.log('~ sayMyName', sayMyName);

console.log('~ sayMyName', sayMyName);
