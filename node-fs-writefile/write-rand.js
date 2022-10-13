const fs = require('fs');

const randomNumber = Math.random();
const data = randomNumber.toString() + '\n';
fs.writeFile('random.txt', data, error => {
  if (error) throw error;

  // console.log(data);
});
