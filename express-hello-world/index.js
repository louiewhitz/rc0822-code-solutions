var express = require('express');
var app = express();

app.use(function (req, res) {
  // console.log(req.method);
  res.send('<h1>Hi</h1><br><h4>Nice to meet you</h4><br><p>Allow me to introduce myself, I am Louisa Whitaker</p>');
  // not sure if this is how I am supposed to add an html string? ^^
});

app.listen(3000, () => {
  // console.log('SERVER listening!');
});
