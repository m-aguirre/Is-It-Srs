const express = require('express');

const app = express();
const router = express.Router();

const IP = '127.0.0.1';
const PORT = '5150';

// app.get('/', function (req, res) {
//   res.send('/client/index.html');
// })

// GET method route
app.get('/', function (req, res) {
  res.send('root')
});

app.use('/home', express.static(__dirname + '/client'));

// POST method route
app.post('/', function (req, res) {
  res.send('POST request to the homepage')
})

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}`)
})
