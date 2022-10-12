const add = require('./add');

const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const x = Number(process.argv[2]);
const operator = process.argv[3];
const y = Number(process.argv[4]);

if (operator === 'plus') {
  console.log('result:', add(x, y));
} else if (operator === 'minus') {
  console.log('result:', subtract(x, y));
} else if (operator === 'over') {
  console.log('result', divide(x, y));
} else if (operator === 'times') {
  console.log('Result:', multiply(x, y));
} else {
  console.log('Invalid operation');
}
