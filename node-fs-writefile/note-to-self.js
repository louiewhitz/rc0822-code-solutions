const fs = require('fs');
const message = process.argv[2] + '\n';
fs.writeFile('note.txt', message, err => {
  if (err) throw err;

});
