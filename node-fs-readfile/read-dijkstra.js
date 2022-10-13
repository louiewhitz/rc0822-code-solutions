const fs = require('fs');
fs.readFile('dijkstra.txt', 'utf8', (error, data) => {
  if (error) throw error;
  console.log(data);
});
