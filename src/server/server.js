const express = require('express');
const bodyParser = require('body-parser');
const mysql      = require('mysql');

// Creating connection object with MySQL database configuration.
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'admin',
  password : 'password',
  database : 'test'
});

// Using the connection object above to connect to MySQL database.
connection.connect();

// Create express server called app.
const app = express();

// add configuration to express server to read/parse JSON.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Start the server on port 3000.
app.listen(3000, () => {
 console.log('App is running on http://localhost at port 3000.');
});

//app.post goes here

