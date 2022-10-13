const fs = require('fs');

fs.readFile('note.txt', 'utf8', (err, data) => {

  if (err) {
    console.error(err);
    process.exit(1);
  }
  const result = data + '\n';

  fs.writeFile('copy-of-note.txt', result, err => {
    if (err) throw err;

  });
});
