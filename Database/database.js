var mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:5150/home');
//
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!
// });
//
// var kittySchema = mongoose.Schema({
//     name: String
// });
//
// var Kitten = mongoose.model('Kitten', kittySchema);
//
// var makeCat = function() {
// var silence = new Kitten({ name: 'Silence' });
// console.log(silence.name); // 'Silence'
// };

module.exports.connect = function() {

  mongoose.connect('mongodb://127.0.0.1:27017/test');
  var db = mongoose.connection;

 mongoose.connection.on('connected', function () {
   console.log('Mongoose default connection open');
 });

 // If the connection throws an error
 mongoose.connection.on('error',function (err) {
   console.log('Mongoose default connection error: ' + err);
 });
 //
 // When the connection is disconnected
 mongoose.connection.on('disconnected', function () {
   console.log('Mongoose default connection disconnected');
 });
 //Bind connection to error event (to get notification of connection errors)
 db.on('error', console.error.bind(console, 'MongoDB connection error:'));

}
