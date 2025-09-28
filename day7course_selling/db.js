const mongoose=require('mongoose')
const {Schema,Types}=mongoose;
const ObjectId=mongoose.Types.ObjectId;
mongoose.connect("mongodb+srv://pawarsarthak24:7M4Q5Dff96Sbsvg@cluster0.hfgknhp.mongodb.net/couseSellingWebsite")

const userSchema=new Schema({
    email:{type:String,unique:true},
    password:String,
    firstName:String,
    lastName:String
})
const courseSchema=new Schema({
    title:String,
    description:String,
    price:Number,
    imageUrl:String,
    creatorId:ObjectId 
})

const adminSchema=new Schema({
    _id:ObjectId,
    email:String,
    password:String,
    firstName:String,
    lastName:String
})
const PurchaseSchema=new Schema({
    _id:ObjectId,
    courseId:ObjectId,
    userId:ObjectId

})
const   userModel=mongoose.model('user',userSchema)
const purchaseModel=mongoose.model('purchase',PurchaseSchema)
const adminModel=mongoose.model('admin',adminSchema)
const courseModel=mongoose.model('course',courseSchema)

module.exports={
    userModel,
    purchaseModel,
    adminModel,
    courseModel
}