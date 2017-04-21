const express = require('express');


const app = express();

const IP = '127.0.0.1';
const PORT = '5150';

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}`)
})
