const mongoose = require('mongoose');
const { Schema } = mongoose;  // only Schema

const UserSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  name: String
});

// model
const UserModel = mongoose.model('User', UserSchema);

// correct export
module.exports = {
  UserModel
};
