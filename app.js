const express = require('express');
const mongoose = require('mongoose');
const db = require('./Database/database.js');

const app = express();
const router = express.Router();

const IP = '127.0.0.1';
const PORT = '27017';

// app.get('/', function (req, res) {
//   res.send('/client/index.html');
// })

db.connect();


 // mongoose.connection.on('connected', function () {
 //     mongoose.connection.db.collectionNames(function (err, names) {
 //         if (err) console.log(err);
 //         else console.log(names);
 //     });
 // })

// // GET method route
// app.get('/', function (req, res) {
// //  mongoose.connect('mongodb://127.0.0.1:5150/home');
//   res.send('root')
// });
//
// mongoose.model('users', {name:String})
//
// app.get('/users', function(req, res) {
//
//   mongoose.model('users').find(function(err, data) {
//     res.send(data);
//   });
// });

app.use('/home', express.static(__dirname + '/client'));

// POST method route
app.post('/', function (req, res) {
  res.send('POST request to the homepage')
})

app.listen(PORT, function () {
  console.log(`Is It Srs? app listening on port ${PORT}`)
})
