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
const nodemailer = require('nodemailer');
const app = express();
const cron = require('node-cron');
const fs = require('fs');



// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/uploads', express.static('uploads'));
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

// Configure the email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'Ichnaea.lostandFound@gmail.com',
    pass: 'aoli lzpw wezn sowr'
  },
  tls: {
    rejectUnauthorized: false // Allow self-signed certificates
  }
});


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

// Endpoint for finder
app.post('/api/upload', upload.single('image'), (req, res) => {
  const { id, firstname, lastname, email, location, description, seek_item } = req.body;
  const imagePath = `/uploads/${req.file.filename}`; // Corrected file path for static usage
  const sql = 'INSERT INTO finder (id, firstname, lastname, email, image, location, description, seek_item) VALUES (?,?,?,?,?,?,?,?)';
  const imageUrl = req.protocol + '://' + req.get('host') + imagePath;
  connection.query(sql, [id, firstname, lastname, email, imagePath, location, description, seek_item], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error saving image to database');
    } else {
      res.status(200).send({ msg: 'Lost Item uploaded successfully', image: imageUrl });
    }
  });
});

// Endpoint for founder
app.post('/api/founder', upload.single('image'), (req, res) => {
  const { id, firstname, lastname, email, location, description, found_item } = req.body;
  const imagePath = `/uploads/${req.file.filename}`; // Corrected file path for static usage
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

// Matching items
const matchItems = () => {
  const sql = `
    INSERT INTO matches (finder_id, founder_id, finder_name, founder_name, finder_item, founder_item, finder_location, founder_location, finder_description, founder_description, finder_email, founder_email)
    SELECT 
        f.finder_id, 
        fo.founder_id,
        CONCAT(f.firstname, ' ', f.lastname) AS finder_name,
        CONCAT(fo.firstname, ' ', fo.lastname) AS founder_name,
        f.seek_item AS finder_item, 
        fo.found_item AS founder_item,
        f.location AS finder_location, 
        fo.location AS founder_location,
        f.description AS finder_description,
        fo.description AS founder_description,
        f.email AS finder_email,
        fo.email AS founder_email
    FROM finder f
    JOIN founders fo
    ON (
        (f.seek_item LIKE CONCAT('%', fo.found_item, '%') 
        OR fo.found_item LIKE CONCAT('%', f.seek_item, '%')) 
    AND
        (f.location LIKE CONCAT('%', fo.location, '%') 
        OR fo.location LIKE CONCAT('%', f.location, '%')) 
    AND
        (f.description LIKE CONCAT('%', fo.description, '%') 
        OR fo.description LIKE CONCAT('%', f.description, '%')) 
    )
    WHERE NOT EXISTS (
        SELECT 1
        FROM matches m
        WHERE m.finder_id = f.finder_id
        AND m.founder_id = fo.founder_id
    );`;
  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Error matching items:', err);
    } else {
      console.log('Items matched successfully');
      notifyUsers();
    }
  });
};
cron.schedule('*/1 * * * *', matchItems);

//send email notifications
const notifyUsers = () => {
  const sql = 'SELECT * FROM matches WHERE notified = FALSE';
  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching matches:', err);
    } else {
      results.forEach(match => {
        // Email to finder
        const mailOptionsFinder = {
          from: 'Ichnaea.lostandFound@gmail.com',
          to: match.finder_email,
          subject: 'Match Found!',
          text: `Dear ${match.finder_name},\n\nYour item "${match.finder_item}" has been matched with an item "${match.founder_item}" found by ${match.founder_name}. Location: ${match.finder_location}. Description: ${match.finder_description}.\n\nBest regards,\nYour Matching Service`
        };

        // Email to founder
        const mailOptionsFounder = {
          from: 'Ichnaea.lostandFound@gmail.com',
          to: match.founder_email,
          subject: 'Match Found!',
          text: `Dear ${match.founder_name},\n\nYour item "${match.founder_item}" has been matched with an item "${match.finder_item}" sought by ${match.finder_name}. Location: ${match.founder_location}. Description: ${match.finder_description}.\n\nBest regards,\nYour Matching Service`
        };

        // Send emails
        transporter.sendMail(mailOptionsFinder, (error, info) => {
          if (error) {
            console.error('Error sending email to finder:', error);
          } else {
            console.log('Email sent to finder:', info.response);
          }
        });

        transporter.sendMail(mailOptionsFounder, (error, info) => {
          if (error) {
            console.error('Error sending email to founder:', error);
          } else {
            console.log('Email sent to founder:', info.response);
          }
        });

        // Update the match as notified
        const updateSql = 'UPDATE matches SET notified = TRUE WHERE finder_id = ? AND founder_id = ?';
        connection.query(updateSql, [match.finder_id, match.founder_id], (updateErr) => {
          if (updateErr) {
            console.error('Error updating match as notified:', updateErr);
          } else {
            console.log('Match updated as notified');
          }
        });
      });
    }
  });
};


//matching result
app.get('/api/matchingresults', (req, res) => {
  const sql = 'SELECT * FROM matches';
  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching matches:', err);
      res.status(500).json({ message: 'Error fetching matches' });
    } else {
      res.status(200).json(results);
    }
  });
});




app.post('/feedback', (req, res) => {
  const { message } = req.body;
  connection.query('INSERT INTO feedback (message) VALUES (?)', [message], (error, results, fields) => {
    if (error) {
      console.error('Error sending feedback:', error);
      res.status(500).json({ message: 'Please try again.' });
      return;
    }
    console.log('Feedback sent successfully');
    res.status(200).json({ msg: 'Feedback sent successfully.' });
  });
});  

// app.get('/api/home', (req, res) => {
//   connection.query('SELECT * FROM finder', (error, results, fields) => {
//     if (error) {
//       console.error('Error fetching data:', error);
//       res.status(500).json({ message: 'Please try again.' });
//       return;
//     }
//     console.log('Data fetched successfully');
//     res.status(200).json(results);
//   });
// });

app.get('/api/home', (req, res) => {
  connection.query('SELECT * FROM finder', (error, results, fields) => {
    if (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ message: 'Please try again.' });
      return;
    }
    console.log('Data fetched successfully');
    
    const resultsWithImageUrl = results.map(result => {
      return {
        ...result,
        imageUrl: req.protocol + '://' + req.get('host') + result.image
      };
    });

    res.status(200).json(resultsWithImageUrl);
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

//feedback
app.post('/feedback', (req, res) => {
  const { message } = req.body;
  connection.query('INSERT INTO feedback (message) VALUES (?)', [message], (error, results, fields) => {
    if (error) {
      console.error('Error sending feedback:', error);
      res.status(500).json({ message: 'Please try again.' });
      return;
    }
    console.log('Feedback sent successfully');
    res.status(200).json({ msg: 'Feedback sent successfully.' });
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
