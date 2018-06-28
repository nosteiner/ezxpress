
// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');



// Get our API routes
const commentsAPI = require('./server/routes/commentsApi');
const customerAPI = require('./server/routes/customersApi');
const motoboysAPI = require('./server/routes/motoboysApi');
const ordersAPI = require('./server/routes/ordersApi');


const Sequelize = require('sequelize');
const app = express();
const Nexmo = require('nexmo')
const nexmo = require('./server/DataAccsess/sms')

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist/ezxpress')));

// Set our api routes
app.use('/commentsApi', commentsAPI); // use enables the midddleware, which is customerAPI
app.use('/customersApi', customerAPI);
app.use('/motoboysApi', motoboysAPI);
app.use('/ordersApi', ordersAPI);

//send SMS
app.post('/send', (req, res) => {
  nexmo.message.sendSms(req.body.from, req.body.to, req.body.text)
});


// Catch all other routes and return the index file
app.get('*', (req, res) => {
  console.log('yooooo')
  res.sendFile(path.join(__dirname, 'dist/ezxpress/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);




/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));