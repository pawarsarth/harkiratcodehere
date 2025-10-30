const { Router } = require('express');
const userRouter = Router();
const {userMiddleware}=require('../middleware/user');
const {JWT_SECRET}=require('../config')
const {z}=require('zod')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const {userModel,purchaseModel, courseModel}=require('../db')

userRouter.post('/signup',async  (req,res)=>{

     const requireBody=z.object({
       email:z.string().min(3).max(100).email(),
        firstName:z.string().min(3).max(100), 
        password:z.string().min(3).max(300),
        lastName:z.string().min(3).max(100)
    })

    const parsed=requireBody.safeParse(req.body)

    if(!parsed.success)
    {
        return res.status(400).json({
            message:"incorrect details here"
        })
    }
    const {firstName,email,password,lastName}=parsed.data;

    const hashedPassword=await  bcrypt.hash(password,2)

    userModel.create({
        email,
        password:hashedPassword,
        firstName,
        lastName
        
    })


    res.json({ message: "signup route" });

    res.json({
        message:"welcome"
    });
});

userRouter.post('/signin',async (req,res)=>{
    email=req.body.email;
    password=req.body.password;

    const user =await  userModel.findOne({email});

    if(!user)
    {
        res.status(403).json({
            message:"user does not exist"
        })
    }

    const passwordmatch=await bcrypt.compare(password,user.password);
    if(passwordmatch)
    {
        const token=jwt.sign({id:user._id},JWT_SECRET);
        res.json({token});
    }
    else 
    {
        res.status(403).json({
            message:"incorretc credentails"
        })
    }

    res.json({ message: "signin route" });
    res.json({
        message:"post user signin"
    });
});

userRouter.get('/pruchases',userMiddleware,async (req,res)=>{

    const userId=req.userId;
    const purchase =await purchaseModel.find({
        userId 
    })

    const courseData=await courseModel.find({
        _id:{$in:purchase.map(x=>x.courseId)}
    })

    res.json({
        purchase,
        courseData
    })
})


module.exports = { userRouter };  // ✅
