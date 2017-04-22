var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var userSchema = new Schema({
    user: String
});

//Export function to create "SomeModel" model class
module.exports = mongoose.model('users', userSchema );
