const fs = require('fs');
let count = 0;
const allFiles = process.argv.slice(2, process.argv.length);
const readAll = () => {
  if (count >= allFiles.length) {
    return;
  }

  fs.readFile(allFiles[count], 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    console.log(data);
    count++;
    readAll();
  });

};

readAll();

// function chunck(filename, cb) {
//   fs.readFile(filename, cb);
// }
//  let file = process.argv[1];
//  fs.readFile(file, process.argv[2], 'utf8', (data, err) =>{}) {

//  }
