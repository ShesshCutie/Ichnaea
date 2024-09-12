// const express = require('express');
// const mysql = require('mysql');
// const app = express();
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const multer = require('multer');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'renz',
//   database: 'ichnea',
// });

// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting to MySQL: ' + err.stack);
//     return;
//   }
//   console.log('Connected to MySQL as id ' + connection.threadId);
// });

// const storage = multer.memoryStorage(); 
// const upload = multer({ storage });

// app.use(express.json());
// app.use(cors());

// app.post('/signup', (req, res) => {
//   const { Username, firstname, lastname, email, password } = req.body;
//   connection.query('INSERT INTO users (Username, firstname, lastname, email, password) VALUES (?, ?, ?, ?, ?)', [Username, firstname, lastname, email, password], (error, results, fields) => {
//     if (error) {
//       console.error('Error signing up:', error);
//       res.status(500).json({ message: 'Please try again.' });
//       return;
//     }
//     console.log('User signed up successfully');
//     res.status(200).json({ message: 'Sign-up successful' });
//   });
// });


// app.post('/login', (req, res) => {
//   const { username, password } = req.body;
//   connection.query('SELECT * FROM users WHERE Username = ? AND password = ?', [username, password], (error, results, fields) => {
//     if (error) {
//       console.error('Error logging in:', error);
//       res.status(500).json({ message: 'Please try again.' });
//       return;
//     }
//     if (results.length === 0) {
//       console.log('No user found with those credentials');
//       res.status(404).json({ message: 'No user found with those credentials.' });
//       return;
//     }
//     console.log('User logged in successfully');
//     res.status(200).json({ message: 'Login successful', user: results[0] });
//   });
// });


// app.post('/founder', (req, res) => {
//   console.log('Received data:', req.body); 
//   const { firstname, lastname, email, location, description, found_item } = req.body;
//   connection.query('INSERT INTO founders (firstname, lastname, email, location, description, found_item) VALUES (?, ?, ?, ?, ?, ?)', [firstname, lastname, email, location, description, found_item], (error, results, fields) => {
//     if (error) {
//       console.error('Error Uploading:', error);
//       res.status(500).json({ message: 'Please try again.' });
//       return;
//     }
//     console.log('Values inserted:', results); 
//     res.status(200).json({ message: 'Upload successful' });
//   });
// });

// app.post('/finder', (req, res) => {
//   console.log('Received data:', req.body); 
//   const { firstname, lastname, email, location, description, lost_item } = req.body;
//   connection.query('INSERT INTO founders (firstname, lastname, email, location, description, lost_item) VALUES (?, ?, ?, ?, ?, ?)', [firstname, lastname, email, location, description, lost_item], (error, results, fields) => {
//     if (error) {
//       console.error('Error Uploading:', error);
//       res.status(500).json({ message: 'Please try again.' });
//       return;
//     }
//     console.log('Values inserted:', results); 
//     res.status(200).json({ message: 'Upload successful' });
//   });
// });

// app.get('/api/data', (req, res) => {
//   connection.query('SELECT * FROM founders', (error, results, fields) => {
//     if (error) {
//       console.error('Error fetching data:', error);
//       res.status(500).json({ message: 'Please try again.' });
//       return;
//     }
//     console.log('Data fetched successfully');
//     res.status(200).json(results);
//   });
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });













// const express = require('express');
// const multer = require('multer');
// const cors = require('cors');
// const mysql = require('mysql');
// const path = require('path');
// const app = express();

// app.use(cors({
//   origin: ['http://192.168.1.216:3000', 'http://192.168.1.216:19006', '*'],
//   methods: ["GET", "POST"],
//   credentials: true,
// }));

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });

// app.use(express.json());

// // Configure multer storage settings
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/');
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
//   },
// });

// // Filter for image files only
// const fileFilter = (req, file, cb) => {
//   if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/gif') {
//     cb(null, true);
//   } else {
//     cb(new Error('Invalid file type'), false);
//   }
// };

// // Get file extension from mimetype
// const GetExtension = (mimetype) => {
//   switch (mimetype) {
//     case 'image/jpeg':
//       return '.jpeg';
//     case 'image/png':
//       return '.png';
//     case 'image/gif':
//       return '.gif';
//     default:
//       return '';
//   }
// };

// // Initialize multer middleware
// const upload = multer({ storage, fileFilter });

// // Connect to MySQL database
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'renz',
//   database: 'ichnea',
// });

// connection.connect((err) => {
//   if (err) {
//     console.log('Error connecting to the database:', err);
//   } else {
//     console.log('Connected to the database');
//   }
// });

// // app.post('/api/upload', upload.single('image'), (req, res) => {
// //   // const imagePath = `/uploads/${req.file.filename}`;
// //   const imagePath = `/uploads/${req.file.filename}${GetExtension(req.file.mimetype)}`;
// //   const sql = 'INSERT INTO finder (image, location, description) VALUES (?,?,?)';
// //   const imageUrl = req.protocol + '://' + req.get('host') + imagePath;
// //   connection.query(sql, [imagePath, req.body.location, req.body.description], (err, result) => {
// //     if (err) {
// //       console.log(err);
// //      res.status(500).send('Error saving image to database');
// //     } else {
// //       res.status(200).send({ msg: 'Lost Item uploaded successfully', image: imagePath });
// //     }
// //   });
// // });

// app.post('/founder', (req, res) => {
//   console.log('Received data:', req.body); 
//   const { id, firstname, lastname, email, location, description, found_item } = req.body;
//   connection.query('INSERT INTO founders (id, firstname, lastname, email, location, description, found_item) VALUES (?, ?, ?, ?, ?, ?, ?)', [id, firstname, lastname, email, location, description, found_item], (error, results, fields) => {
//     if (error) {
//       console.error('Error Uploading:', error);
//       res.status(500).json({ message: 'Please try again.' });
//       return;
//     }
//     console.log('Values inserted:', results); 
//     res.status(200).json({ message: 'Upload successful' });
//   });
// });


// app.post('/api/upload', upload.single('image'), (req, res) => {
//   // const imagePath = `/uploads/${req.file.filename}`;
//   const imagePath = `/uploads/${req.file.filename}${GetExtension(req.file.mimetype)}`;
//   const sql = 'INSERT INTO finder (firstname, lastname, email, image, location, description, seek_item) VALUES (?,?,?,?,?,?,?)';
//   const imageUrl = req.protocol + '://' + req.get('host') + imagePath;
//   connection.query(sql, [imagePath, req.body.location, req.body.description], (err, result) => {
//     if (err) {
//       console.log(err);
//      res.status(500).send('Error saving image to database');
//     } else {
//       res.status(200).send({ msg: 'Lost Item uploaded successfully', image: imagePath });
//     }
//   });
// });

// app.post('/login', (req, res) => {
//   const { username, password } = req.body;
//   connection.query('SELECT * FROM users WHERE Username = ? AND password = ?', [username, password], (error, results, fields) => {
//     if (error) {
//       console.error('Error logging in:', error);
//       res.status(500).json({ message: 'Please try again.' });
//       return;
//     }
//     if (results.length === 0) {
//       console.log('No user found with those credentials');
//       res.status(404).json({ message: 'No user found with those credentials.' });
//       return;
//     }
//     console.log('User logged in successfully');
//     res.status(200).json({ message: 'Login successful', user: results[0] });
//   });
// });

// app.get('/api/data', (req, res) => {
//   connection.query('SELECT * FROM founders', (error, results, fields) => {
//     if (error) {
//       console.error('Error fetching data:', error);
//       res.status(500).json({ message: 'Please try again.' });
//       return;
//     }
//     console.log('Data fetched successfully');
//     res.status(200).json(results);
//   });
// });

// app.get('/api/data/:userId', (req, res) => {
//   const userId = req.params.userId;
//   connection.query('SELECT * FROM founders WHERE id =?', [userId], (error, results, fields) => {
//     if (error) {
//       console.error('Error fetching data:', error);
//       res.status(500).json({ message: 'Please try again.' });
//       return;
//     }
//     if (results.length === 0) {
//       console.log('No data found for user ID:', userId);
//       res.status(404).json({ message: 'No data found for this user.' });
//       return;
//     }
//     console.log('Data fetched successfully');
//     res.status(200).json(results);
//   });
// });

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });
























const express = require('express');
const multer = require('multer');
const cors = require('cors');
const mysql = require('mysql');
const path = require('path');
const app = express();

app.use(cors({
  origin: ['http://192.168.11.188:3000', 'http://192.168.11.188:19006', '*'],
  methods: ["GET", "POST"],
  credentials: true,
}));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(express.json());

// Configure multer storage settings
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  },
});

// Filter for image files only
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/gif') {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type'), false);
  }
};

// Get file extension from mimetype
const GetExtension = (mimetype) => {
  switch (mimetype) {
    case 'image/jpeg':
      return '.jpeg';
    case 'image/png':
      return '.png';
    case 'image/gif':
      return '.gif';
    default:
      return '';
  }
};

// Initialize multer middleware
const upload = multer({ storage, fileFilter });

// Connect to MySQL database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'ichnaea',
});

connection.connect((err) => {
  if (err) {
    console.log('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database');
  }
});

//login.js
app.post('/api/login', (req, res) => {
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

//finder
app.post('/api/upload', upload.single('image'), (req, res) => {
  const { id, firstname, lastname, email, location, description, seek_item } = req.body;
  const imagePath = `/uploads/${req.file.filename}${GetExtension(req.file.mimetype)}`;
  const sql = 'INSERT INTO finder (id, firstname, lastname, email, image, location, description, seek_item) VALUES (?,?,?,?,?,?,?,?)';
  const imageUrl = req.protocol + '://' + req.get('host') + imagePath;
  connection.query(sql, [id, firstname, lastname, email, imagePath, location, description, seek_item], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error saving image to database');
    } else {
      res.status(200).send({ msg: 'Lost Item uploaded successfully', image: imagePath });
    }
  });
});

//founder
app.post('/api/founder', upload.single('image'), (req, res) => {
  const { id, firstname, lastname, email, location, description, found_item } = req.body;
  const imagePath = `/uploads/${req.file.filename}${GetExtension(req.file.mimetype)}`;
  const sql = 'INSERT INTO founders (id, firstname, lastname, email, image, location, description, found_item) VALUES (?,?,?,?,?,?,?,?)';
  const imageUrl = req.protocol + '://' + req.get('host') + imagePath;
  connection.query(sql, [id, firstname, lastname, email, imagePath, location, description, found_item], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error saving image to database');
    } else {
      res.status(200).send({ msg: 'Found Item uploaded successfully', image: imageUrl });
    }
  });
});


app.get('/api/home', (req, res) => {
  connection.query('SELECT * FROM finder', (error, results, fields) => {
    if (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ message: 'Please try again.' });
      return;
    }
    console.log('Data fetched successfully');
    res.status(200).json(results);
  });
});

app.get('/api/datas', (req, res) => {
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

//profilescreen Upload
app.get('/api/data/:userId', (req, res) => {
  const userId = req.params.userId;
  connection.query('SELECT * FROM finder WHERE id =?', [userId], (error, results, fields) => {
    if (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ message: 'Please try again.' });
      return;
    }
    if (results.length === 0) {
      console.log('No data found for user ID:', userId);
      res.status(404).json({ message: 'No data found for this user.' });
      return;
    }
    console.log('Data fetched successfully');
    res.status(200).json(results);
  });
});


//signup
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

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});



app.get('/api/users/:userId', (req, res) => {
  const userId = req.params.userId;
  connection.query('SELECT * FROM users WHERE id = ?', [userId], (error, results, fields) => {
    if (error) {
      console.error('Error fetching user data:', error);
      res.status(500).json({ message: 'Please try again.' });
      return;
    }
    if (results.length === 0) {
      console.log('No user found with ID:', userId);
      res.status(404).json({ message: 'No user found with this ID.' });
      return;
    }
    console.log('User data fetched successfully');
    res.status(200).json(results[0]); // Return only the first user data (assuming user ID is unique)
  });
});
