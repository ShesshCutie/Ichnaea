const express = require('express');
const mysql = require('mysql');
const app = express();
const cors = require('cors');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'renz',
    database: 'ichnea'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL as id ' + connection.threadId);
});

app.use(express.json());
app.use(cors()); // Enable CORS

app.post('/signup', (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    connection.query('INSERT INTO users (firstname, lastname, email, password) VALUES (?, ?, ?, ?)', [firstname, lastname, email, password], (error, results, fields) => {
        if (error) {
            console.error('Error signing up:', error);
            res.status(500).json({ message: 'Sign-up failed. Please try again.' });
            return;
        }
        console.log('User signed up successfully');
        res.status(200).json({ message: 'Sign-up successful' });
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});