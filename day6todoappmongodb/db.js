const mongoose = require('mongoose');
const { Schema, Types } = mongoose;

const UserSchema = new Schema({
  email: {type:String,unique:true},
  password: String,
  name: String
});

const TodoSchema = new Schema({
  title: String,
  done: Boolean,
  // just an ObjectId, no ref
  userId: Types.ObjectId 
  // OR userId: { type: Schema.Types.ObjectId }
});

const UserModel = mongoose.model('User', UserSchema);
const TodoModel = mongoose.model('Todo', TodoSchema);

module.exports = {
  UserModel,
  TodoModel
};
