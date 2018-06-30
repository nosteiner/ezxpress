
// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
var multer = require('multer');


// Get our API routes
const commentsAPI = require('./server/routes/commentsApi');
const customerAPI = require('./server/routes/customersApi');
const motoboysAPI = require('./server/routes/motoboysApi');
const ordersAPI = require('./server/routes/ordersApi');
const usersAPI = require('./server/routes/usersApi');


const Sequelize = require('sequelize');
const app = express();
const Nexmo = require('nexmo');
const nexmo = require('./server/DataAccsess/sms');

//auth-4
const passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const expressSession = require('express-session');
const user = require('./server/DataAccsess/users')


// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist/ezxpress')));

// //auth-7 lines
// app.use(expressSession({
//   secret: 'thisIsASecret',
//   resave: false,
//   saveUninitialized: false
// }));
// app.use(passport.initialize());
// app.use(passport.session());

// Set our api routes
app.use('/commentsApi', commentsAPI); // use enables the midddleware, which is customerAPI
app.use('/customersApi', customerAPI);
app.use('/motoboysApi', motoboysAPI);
app.use('/ordersApi', ordersAPI);
app.use('/usersApi', usersAPI);

// /////////////////////////////////////////////////////////////////////////authenticat util send SMS
// app.get('/login', (req, res) => {
//   res.sendFile(path.join(__dirname, 'src/index.html'));
// });

// app.post('/login', passport.authenticate('local', {
//   successRedirect: '/',
//   failureRedirect: '/login?err',
//   //session: false
// }));

// passport.serializeUser(function (user, done) {
//   console.log(user);
//   return done(null, user);
// });
// passport.deserializeUser(function(user, done) {
//   done(null, user);
// });
// app.get('/userDetails', function (req, res){
//   if (req.isAuthenticated()){
//     res.send(req.user);
//   } else {
//     res.redirect('/login');
//   }
// });
// passport.use(new LocalStrategy(function(userName, password, done) {
//   if ((userName === "john") && (password === "password")) {
//     return done(null, { userName: userName, id: 1 });
//   } else {
//     return done(null, false);
//   }
// }));
// app.get('/logout', function (req, res) {
//   req.logout();
//   res.send('Logged out!');
// });


// // passport.use(new LocalStrategy(
// //   function(userName,password,done){
// //     user.getOneUser(userName,password).then((user)=>{
// //       console.log(user)
// //       // if(err){return done(err)}   
// //       // else if(!user){return done(null,false)
// //       // if(!user.verifyPassword(password)){return done(null,false)};
// //       return done(null,user)
// //     }
// //     )}
// // ))

// passport.use(new LocalStrategy(
//   function(userName, password, done) {
//     user.getOneUser({
//       userName: userName
//       }, function(err, user) {
//         if (err) {
//           return done(err);
//         }

//         if (!user) {
//           return done(null, false);
//         }

//         if (user.password != password) {
//           return done(null, false);
//         }
//         return done(null, user);
//       });
//   }
// ));
// app.post('/',
//   passport.authenticate('local', { failureRedirect: '/error' }),
//   function(req, res) {
//     res.redirect('/success?userName='+req.user.userName);
//   });
//   app.get('/login', (req, res) => {
//     res.sendFile(path.join(__dirname, 'src/error.html'));
//   });

//   app.use(express.static(path.join(__dirname, 'dist')));
// /////
// // Catch all other routes and return the index file
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname,'src/error.html'));
// });

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
  console.log("updating photo ////")
  console.log(req.body)
  console.log(req.file)
   
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