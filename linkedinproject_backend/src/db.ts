import mongoose from "mongoose";
const {Schema ,Types} =mongoose;

const objectId=mongoose.Types.ObjectId;
mongoose.connect('mongodb+srv://pawarsarthak24:7M4Q5Dff96Sbsvg@cluster0.hfgknhp.mongodb.net/Linkedclone')

const userSchema=new Schema({
  username:{type:String,required:true},
  email:{type:String,required:true},
  password:{type:String,required:true},
  createdAt:{type:Date,default:Date.now}
})

const userModel=mongoose.model('user',userSchema);

const postSchema=new Schema({
  userId:{type:objectId,ref:'user',required:true},
  content:{type:String,required:true},
  createdAt:{type:Date,default:Date.now},
  likes:[{
    type:objectId,
    ref:'user'
  }],
   comments: [
    {
      userId: {
        type: objectId,
        ref: "user",
      },
      commentText: {
        type: String,
        required: true,
        
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
})

const postModel=mongoose.model('post',postSchema)

export {postModel,userModel}