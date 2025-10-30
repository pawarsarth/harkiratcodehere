import mongoose from 'mongoose'
const {Schema, Types}=mongoose;

const objectId=mongoose.Types.ObjectId;
mongoose.connect('mongodb+srv://pawarsarthak24:7M4Q5Dff96Sbsvg@cluster0.hfgknhp.mongodb.net/secondbrain')

const userSchema=new Schema({
    username:{type:String,required:true,unique:true},
    password:{type:String,required:true}
})
const user=mongoose.model('user',userSchema)

//creating tag schema 

const tagSchema=new Schema({
        title:{type:String,required:true,unique:true} 

})
const tag=mongoose.model('tag',tagSchema)


const contentTypes=['images','video','article','audio']

const contentSchema=new Schema({

    link:{type:String,required:true},
    type:{type:String,enum:contentTypes,required:true},
    tags:[{type:objectId, ref:'tag'}],
    title:{type:String,required:true},
    userId:{type:objectId,ref:'user',required:true}

})
const content=mongoose.model('content',contentSchema)

const linkSchema=new Schema({
     hash:{type:String,required:true},
     userId:{type:objectId,ref:'user',required:true}

})
const link=mongoose.model('link',linkSchema)

// schema.ts
export { link,tag,content,user };

// import mongoose from "mongoose";
// const { Schema, Types } = mongoose;

// const objectId = Types.ObjectId;

// // 🧍 User Schema
// const userSchema = new Schema({
//   userName: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
// });
// const User = mongoose.model("User", userSchema);

// // 🏷️ Tag Schema
// const tagSchema = new Schema({
//   title: { type: String, required: true, unique: true },
// });
// const Tag = mongoose.model("Tag", tagSchema);

// // 📦 Content Schema
// const contentTypes = ["image", "video", "article", "audio"] as const;

// const contentSchema = new Schema({
//   link: { type: String, required: true },
//   type: { type: String, enum: contentTypes, required: true },
//   tags: [{ type: objectId, ref: "Tag" }], // ✅ ref name must match model name ("Tag")
//   title: { type: String, required: true },
//   userId: { type: objectId, ref: "User", required: true },
// });
// const Content = mongoose.model("Content", contentSchema);

// // 🔗 Link Schema
// const linkSchema = new Schema({
//   hash: { type: String, required: true }, // ✅ fixed spelling "require" → "required"
//   userId: { type: objectId, ref: "User", required: true },
// });
// const Link = mongoose.model("Link", linkSchema);

// // ✅ Export schemas (if needed separately)
// export { userSchema, tagSchema, contentSchema, linkSchema };

// // ✅ Export models (more useful in most cases)
// export { User, Tag, Content, Link };
