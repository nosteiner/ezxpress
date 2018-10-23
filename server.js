
// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const checkIfAuthenticated = expressJwt({
  secret: 'thisIsTopSecret'
}); 

const app = express();

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
const Nexmo = require('nexmo');
const nexmo = require('./server/DataAccsess/sms');

//auth-4

const user = require('./server/DataAccsess/users')

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist/ezxpress')));


// // Point static path to dist
// app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/commentsApi', commentsAPI); // use enables the midddleware, which is customerAPI
app.use('/customersApi', customerAPI);
app.use('/motoboysApi', motoboysAPI);
app.use('/ordersApi', ordersAPI);
app.use('/usersApi', usersAPI);


//Authentication middleware
app.use(passport.initialize());


passport.use(new LocalStrategy(function(username, password, done) {

  user.getOneUser(username,password).then((user)=>{
    console.log(user)
    // if(err){return done(err)}   
    // else if(!user){return done(null,false)
    // if(!user.verifyPassword(password)){return done(null,false)};
    return done(null,user )
  })
}));


app.post('/login', passport.authenticate('local', {session: false}),
   (req, res) => {
        console.log("entrei login server")
        let userparm = {id: req.user.id,
          userName: req.user.userName, 
          customerId: req.user.customerId,
          motoboyId: req.user.motoboyId}
        console.log(userparm )
        var token = jwt.sign(userparm, 'thisIsTopSecret', { expiresIn: "7d" });
        console.log(token)
        res.send({token})

});

app.post('/isloggedin',(req, res) => {
        console.log(" login server loggedin")
        token = req.body.token
        console.log(token)
        jwt.verify(token.token, 'thisIsTopSecret', function (err, decoded){
          
          if (err){
              console.log(err);
              req.authenticated = false;
              req.decoded = null;
             // next();
          } else {
              console.log("token valid");
              req.decoded = decoded;
              req.authenticated = true;
              console.log(decoded)
              res.send(decoded)
            //  next();
          }
        });
        
    })

    

  app.get('/userDetails',checkIfAuthenticated, function (req, res){
      console.log(req.user)
      res.send(req.user);
  });


//send SMS
app.post('/send', (req, res) => {
  nexmo.message.sendSms(req.body.from, req.body.to, req.body.text)
});


//Function used to configure the middleware storage
var storage = multer.diskStorage({
  destination: function(req, file, callback){
      callback(null, './dist/ezxpress/assets/uploads'); // set the destination
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
      console.log("---- inside Email -----")
      //console.log(req.body)
  


      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'ezxpressisrael@gmail.com',
          pass: '1Qazxsw@'
        }
      });

      var mailOptions = {
        from: 'ezxpressisrael@gmail.com',
        to: req.body.customer.email,
        subject: 'Delvery Confirmation',
        html: '<h1>Your Order was Delivered</h1>'+
          '<p>That was easy!</p>'+
          '<p> From:'+req.body.localAddress+'</p>'+
          '<p> To:'+req.body.destAddress+'</p>'+
          '<p> Delivery person:'+req.body.motoboy.firstName+ ' '+req.body.motoboy.lastName+'</p>'+
          '<img src="'+req.body.signature+'"/>'+
          '<h3> Dont forget to send your comments about the service ! It is very important for us to improve the service<h3> '+
          '<h2> Thanks you for choosing ezXpress !! </h2>'
        };
      transporter.use('compile', inlineBase64({cidPrefix: 'somePrefix_'}));
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

      res.send({
        success: true,
        message: 'Emails sent',
      });

});

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  console.log('yooooo')
  res.sendFile(path.join(__dirname, 'dist','index.html'));
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