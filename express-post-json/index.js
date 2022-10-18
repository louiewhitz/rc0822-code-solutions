/* eslint-disable no-console */
const express = require('express');
const app = express();

let nextId = 1;
const grades = {};
app.get('/api/grades', (req, res) => {
  const gradesArr = [];
  for (const grade in grades) {
    gradesArr.push(grades[grade]);
    // console.log(grade);
  }
  res.json(gradesArr);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const newGrade = req.body;
  newGrade.id = nextId;
  grades[nextId] = newGrade;
  nextId++;
  res.status(201).json(newGrade);
});

app.listen(3000, () => {
  console.log('server 3000');
});
