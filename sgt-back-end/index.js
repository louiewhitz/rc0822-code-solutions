/* eslint-disable no-console */
const pg = require('pg');

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

const express = require('express');
const app = express();
app.use(express.json());
app.get('/api/grades', (req, res) => {
  const sql = `select *
    from "grades";`;
  db.query(sql)
    .then(result => {
      const allGrades = result.rows;
      res.status(200).json(allGrades);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ Error: 'An unexpected error occurred' });
    });
});

app.post('/api/grades', (req, res) => {
  const newScore = Number(req.body.score);
  const name = req.body.name;
  const course = req.body.course;
  if (
    name === undefined ||
    course === undefined ||
    Number.isInteger(newScore) === false ||
    newScore <= 0
  ) {
    res.status(400).json({
      ERROR: 'Missing values, or invalid values.'
    });
    return;
  }
  const params = [name, course, newScore];
  const sql = `insert into
  "grades"("name",
  "course",
  "score")
  values ($1, $2, $3)
  returning *;`;
  db.query(sql, params)
    .then(result => {
      const newGrade = result.rows[0];
      res.status(201).json(newGrade);
      console.log('newGrade', newGrade);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ Error: 'An internal error occurred' });
    });
});

app.put('api/grades/:gradeId', (req, res) => {
  const updateGrade = Number(req.body.score);
  const updateId = Number(req.params.gradeId);
  if (
    Number.isInteger(updateGrade) === false ||
    req.body.name === undefined ||
    req.body.course === undefined ||
    updateGrade <= 0
  ) {
    res.status(400).json({ Error: `Invalid ${updateId}` });
  } else if (!Number.isInteger(updateId) || updateId <= 0) {
    res
      .status(404)
      .json({ Error: `Sorry, this ${updateId} is not in our databasee` });
  }
  const params = [updateGrade, req.body.name, req.body.course, updateId];

  const sql = `update "grades"
  set "name" = $1,
  "course" = $2,
  "score" = $3
  where "gradeId" = $4
  returning *;
`;
  db.query(sql, params)
    .then(result => {
      const updated = result.rows[0];
      if (!updated) {
        res.status(404).json({ Error: `That ${updated} does not exist` });
      } else {
        res.status(200).json(updated);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ Error: 'Sorry, internal error' });
    });
});

app.listen(3000, () => {
  console.log('server 3000');
});
