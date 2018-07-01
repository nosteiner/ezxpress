
// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const multer = require('multer');
const nodemailer = require('nodemailer');
const inlineBase64 = require('nodemailer-plugin-inline-base64');


// Get our API routes
const commentsAPI = require('./server/routes/commentsApi');
const customerAPI = require('./server/routes/customersApi');
const motoboysAPI = require('./server/routes/motoboysApi');
const ordersAPI = require('./server/routes/ordersApi');
const usersAPI = require('./server/routes/usersApi');


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
app.use('/usersApi', usersAPI);

//send SMS
app.post('/send', (req, res) => {
  nexmo.message.sendSms(req.body.from, req.body.to, req.body.text)
});


//Function used to configure the middleware storage
var storage = multer.diskStorage({
  destination: function(req, file, callback){
      callback(null, './public/uploads'); // set the destination
  },
  filename: function(req, file, callback){
      
      callback(null, file.originalname); // set the file name and extension
  }
});
var upload = multer({storage: storage});

app.post('/uploadPhoto', upload.single('uploads'), function(req, res, next) {
  console.log("upload photo ////")
  // console.log(req.body)
  // console.log(req.file)
   
});

app.post('/uploadSign', upload.single('uploads'), function(req, res, next) {
  console.log("upload Sign ////")
  // console.log(req.body)
  // console.log(req.file)
   
});

// Send Email 

app.post('/sendEmail', (req, res) => {
      console.log(req.body.sign)
  


      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'ezxpressisrael@gmail.com',
          pass: '1Qazxsw@'
        }
      });

      var mailOptions = {
        from: 'ezxpressisrael@gmail.com',
        to: 'dchuwer@gmail.com',
        subject: 'Delvery Confirmation',
        html: '<h1>Your Order was Delivered</h1>'+
          '<p>That was easy!</p>'+
          '<img src="'+req.body.sign+'"/>'
      };
      transporter.use('compile', inlineBase64({cidPrefix: 'somePrefix_'}));
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

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