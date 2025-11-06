import express from "express";
import jwt from 'jsonwebtoken'
import { userModel,postModel } from "./db.js";
import bcrypt from 'bcrypt'
import z from 'zod'
import mongoose from "mongoose";
import cors from 'cors';
import { userMiddleware } from "./middleware.js";

const app=express()

app.use(express.json())

app.use(cors({
  origin: "http://localhost:5173", // ✅ no trailing slash
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

const JWT_SECRET='sarthak_pawar';

app.post("/api/v1/signup", async(req,res)=>{

    const requireBody=z.object({
        username:z.string().min(3),
        password:z.string().min(3),
        email:z.string().min(3)
    })

    const parsed=requireBody.safeParse(req.body)

    if(!parsed.success)
    {
      return res.status(400).json({
        message:"incorrect details"
      })
    }

    const {username,password,email}=parsed.data;

    const hashedPassword=await bcrypt.hash(password,2)

    try{
       userModel.create({
        username:username,
        password:hashedPassword,
        email:email
       })
       res.json({
        message:'welcome'
       })
    }
    catch(e)
    {
      res.status(411).json({
        message:"error occured" 
      })
    }

})

app.post("/api/v1/signin", async(req,res)=>{

 try{
   const {username,password}=req.body;
  const user=await userModel.findOne({username:username})

  if(!user)
  {
  return  res.status(403).json({
      message:"user not found"
    })
  }
    const pasMatched=await bcrypt.compare(password,user.password)

    if(!pasMatched)
    {
      return res.status(403).json({
        message:'incrorrect credentials'
      })
    }

    const token=jwt.sign({id:user._id},JWT_SECRET);

    res.status(200).json({
      message:'login done',
      token
    })

 }
 catch(error)
 {
  res.status(500).json({
    message:'internal server error'
  })
 }



})

app.post("/api/v1/content",userMiddleware,async(req,res)=>{

  const {content}=req.body;
    await postModel.create({
      content:content,
      likes:[],
      comments:[],
      //@ts-ignore
      userId:req.userId
    })

    res.json({
      message:"content added done here" 
    })

})

app.get("/api/v1/get_content",userMiddleware, async(req,res)=>{

  //@ts-ignore
      // const userId=req.userId;
const posts = await postModel
  .find({})
  .populate("userId", "username") // post owner
  .populate("likes", "username") // users who liked the post
  .populate("comments.userId", "username"); // users who commented

res.json({posts});


})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));