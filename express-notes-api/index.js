/* eslint-disable no-console */
const express = require('express');
const json = require('./data.json');
// console.log('json ', json);

// const read = function read() {
//   for (const key in json.notes) {
//     const entryNumbers = key;
//     const entryNote = json.notes[key];
//     console.log('this is fs.read', `${entryNumbers}: ${entryNote}`);
//   }
// };
const app = express();

const fs = require('fs');

// fs.readFile(json)

app.get('/api/notes', (req, res) => {
  const notesArr = [];
  for (const id in json.notes) {
    notesArr.push(json.notes[id]);
    console.log(notesArr);
    // if(notesArr.length < 0)
  }
  res.status(200);
  res.json(notesArr);
});
// const oneNote = {};
// const fs = require('fs');
app.get('/api/notes/:id', (req, res) => {
  const oneId = Number(req.params.id);

  if (isNaN(oneId) === true || oneId < 1) {
    res.status(400).json({ ERROR: 'ID must be a positive number' });
  } else if (json.notes[oneId] === undefined) {
    res.status(404).json({ ERROR: 'Sorry, there is no ID by that number' });
  } else {
    console.log('json.notes[oneId]', json.notes[oneId]);

    res.status(200).json(json.notes[oneId]);
  }
});

app.use(express.json());

app.post('/api/notes', (req, res) => {
  const content = req.body;
  const id = json.nextId++;
  if (content.content === undefined) {
    res
      .status(400)
      .json({ ERROR: 'Sorry, please insert some content next time...' });
  } else {
    const userNote = content;
    userNote.id = id;
    json.notes[id] = userNote;
    console.log('userNote', userNote);
    json.nextId++;

    const noteJsonStringified = JSON.stringify(json, null, 2);
    console.log('noteJsonStringified', noteJsonStringified);
    fs.writeFile('data.json', noteJsonStringified, 'utf8', err => {
      if (err) {
        console.error(err);
        res.status(500).json({ Error: 'Something went wrong internally....' });
      } else {
        res.status(201);
        res.json(userNote);
      }
    });
  }
});

app.get('/api/notes', (req, res) => {
  const notesArr = [];
  for (const id in json.notes) {
    notesArr.push(json.notes[id]);
    console.log(notesArr);
    // if(notesArr.length < 0)
  }
  res.status(200);
  res.json(notesArr);
});
// const oneNote = {};
// const fs = require('fs');
app.delete('/api/notes/:id', (req, res, err) => {
  const oneId = Number(req.params.id);
  console.log('oneId', oneId);

  if (isNaN(oneId) === true || oneId < 1) {
    res.status(400).json({ ERROR: 'ID must be a positive number' });
  } else if (json.notes[oneId] === undefined) {
    res.status(404).json({ ERROR: `there is no ${oneId} id with note` });
  } else {
    console.log('json.notes[oneId]', json.notes[oneId]);

    delete json.notes[req.params.id];
    res.sendStatus(204);

    fs.writeFile('data.json', JSON.stringify(json, null, 2), 'utf8', err => {
      if (err) {
        console.error(err);
        res.sendStatus(500).json({ ERROR: 'an unexpected error occurred' });
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const editNote = req.body.content;

  const oneId = Number(req.params.id);

  console.log('oneId', oneId);

  if (isNaN(oneId) === true || oneId < 1) {
    res.status(400).json({ ERROR: 'ID must be a positive number' });
  } else if (json.notes[oneId] === undefined) {
    res.status(404).json({ ERROR: `there is no ${oneId} id with note` });
  } else {
    console.log('json.notes[oneId]', json.notes[oneId]);
    json.notes[oneId].content = editNote;
    const updated = json.notes[oneId];

    // updated.id = oneId;
    // json.notes[oneId].content = updated;
    const editJson = JSON.stringify(json, null, 2);

    fs.writeFile('data.json', editJson, 'utf8', err => {
      if (err) {
        console.error(err);
        res.status(500).json({ ERROR: 'an unexpected error occurred' });
      } else {
        res.status(200).json(updated);

      }
    });
  }
});
// err => {
//     if (err) {
//       console.error(err);
//       res.sendStatus(500).json({ ERROR: 'an unexpected error occurred' });
//     }

// });

app.listen(3000, () => {
  console.log('server 3000');
});
