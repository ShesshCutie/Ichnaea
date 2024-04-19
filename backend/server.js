const express = require('express');
const mysql = require('mysql');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root1',
  database: 'inchnaea',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + connection.threadId);
});

app.use(express.json());
app.use(cors());

app.post('/signup', (req, res) => {
  const { Username, firstname, lastname, email, password } = req.body;
  connection.query('INSERT INTO users (Username, firstname, lastname, email, password) VALUES (?, ?, ?, ?, ?)', [Username, firstname, lastname, email, password], (error, results, fields) => {
    if (error) {
      console.error('Error signing up:', error);
      res.status(500).json({ message: 'Please try again.' });
      return;
    }
    console.log('User signed up successfully');
    res.status(200).json({ message: 'Sign-up successful' });
  });
});


app.post('/login', (req, res) => {
  const { username, password } = req.body;
  connection.query('SELECT * FROM users WHERE Username = ? AND password = ?', [username, password], (error, results, fields) => {
    if (error) {
      console.error('Error logging in:', error);
      res.status(500).json({ message: 'Please try again.' });
      return;
    }
    if (results.length === 0) {
      console.log('No user found with those credentials');
      res.status(404).json({ message: 'No user found with those credentials.' });
      return;
    }
    console.log('User logged in successfully');
    res.status(200).json({ message: 'Login successful', user: results[0] });
  });
});

// app.post('/founder', (req, res) => {
//   const { firstname, lastname, email, location, description, found_item } = req.body;
//   connection.query('INSERT INTO founders (firstname, lastname, email, location, description, found_item) VALUES (?, ?, ?, ?, ?, ?)', [firstname, lastname, email, location, description, found_item], (error, results, fields) => {
//     if (error) {
//       console.error('Error Uploading:', error);
//       res.status(500).json({ message: 'Please try again.' });
//       return;
//     }
//     console.log('Uploading successfully');
//     res.status(200).json({ message: 'Upload successful' });
//   });
// });

app.post('/founder', (req, res) => {
  console.log('Received data:', req.body); // Log the request body
  const { firstname, lastname, email, location, description, found_item } = req.body;
  connection.query('INSERT INTO founders (firstname, lastname, email, location, description, found_item) VALUES (?, ?, ?, ?, ?, ?)', [firstname, lastname, email, location, description, found_item], (error, results, fields) => {
    if (error) {
      console.error('Error Uploading:', error);
      res.status(500).json({ message: 'Please try again.' });
      return;
    }
    console.log('Values inserted:', results); // Log the inserted values
    res.status(200).json({ message: 'Upload successful' });
  });
});

app.post('/finder', (req, res) => {
  console.log('Received data:', req.body); // Log the request body
  const { firstname, lastname, email, location, description, lost_item } = req.body;
  connection.query('INSERT INTO founders (firstname, lastname, email, location, description, lost_item) VALUES (?, ?, ?, ?, ?, ?)', [firstname, lastname, email, location, description, lost_item], (error, results, fields) => {
    if (error) {
      console.error('Error Uploading:', error);
      res.status(500).json({ message: 'Please try again.' });
      return;
    }
    console.log('Values inserted:', results); // Log the inserted values
    res.status(200).json({ message: 'Upload successful' });
  });
});

app.get('/api/data', (req, res) => {

  connection.query('SELECT * FROM founders', (error, results, fields) => {
    if (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ message: 'Please try again.' });
      return;
    }
    console.log('Data fetched successfully');
    res.status(200).json(results);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});