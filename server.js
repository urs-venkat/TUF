const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Create MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Update with your MySQL username
  password: '', // Update with your MySQL password
  database: 'tuf' // Update with your database name
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

// Create flashcards table if it doesn't exist
db.query(`
  CREATE TABLE IF NOT EXISTS flashcards (
    id INT AUTO_INCREMENT PRIMARY KEY,
    question TEXT NOT NULL,
    answer TEXT NOT NULL
  )
`, (err) => {
  if (err) throw err;
});

// API Endpoints
app.get('/api/flashcards', (req, res) => {
  db.query('SELECT * FROM flashcards', (err, results) => {
    if (err) throw err;
    res.json(results);
    console.log(results)
  });
});

app.post('/api/flashcards', (req, res) => {
  const { question, answer } = req.body;
  db.query('INSERT INTO flashcards (question, answer) VALUES (?, ?)', [question, answer], (err, result) => {
    if (err) throw err;
    res.json({ id: result.insertId, question, answer });
  });
});

app.put('/api/flashcards/:id', (req, res) => {
  const { id } = req.params;
  const { question, answer } = req.body;
  db.query('UPDATE flashcards SET question = ?, answer = ? WHERE id = ?', [question, answer, id], (err) => {
    if (err) throw err;
    res.json({ id, question, answer });
  });
});

app.delete('/api/flashcards/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM flashcards WHERE id = ?', [id], (err) => {
    if (err) throw err;
    res.json({ id });
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
