var express = require('express');
var app = express();

app.use(function (req, res) {
  //  console.log(req.method);
  res.send('Hello there....');
});

app.listen(3000, () => {
  // console.log('SERVER listening!');
});
