const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// create user schema constructor
const UserSchema = new Schema({
   username: {
    type: String,
    required: true
   },
   password: {
    type: String,
    required: true
   }
});



module.exports = user = mongoose.model('users', UserSchema);