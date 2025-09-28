const mongoose=require('mongoose')
const {Schema,Type}=mongoose;

const UserSchema=new Schema({
    email:{type:String,unique:true},
    password:String,
    name:String
});

const UserModel=mongoose.model('User',UserSchema);

module.export={
    UserModel
}; 