const { Router } = require('express');
const { adminModel,courseModel } = require('../db');
const jwt=require('jsonwebtoken');
const bcrypt = require("bcrypt");
const z=require('zod');
const {JWT_SECRET_ADMIN}=require('../config');
const {adminMiddleware}=require('../middleware/admin')

const adminRouter = Router();



adminRouter.post('/signup', async function (req, res) {
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

    adminModel.create({
        email,
        password:hashedPassword,
        firstName,
        lastName
        
    })


    res.json({ message: "signup route" });

});

adminRouter.post('/signin',async function (req, res) {

    email=req.body.email;
    password=req.body.password;

    const admin =await  adminModel.findOne({email});

    if(!admin)
    {
        res.status(403).json({
            message:"admin does not exist"
        })
    }

    const passwordmatch=await bcrypt.compare(password,admin.password);
    if(passwordmatch)
    {
        const token=jwt.sign({id:admin._id},JWT_SECRET_ADMIN);
        res.json({token});
    }
    else 
    {
        res.status(403).json({
            message:"incorretc credentails"
        })
    }

    res.json({ message: "signin route" });
});

adminRouter.post('/course', adminMiddleware, async function (req, res) {
    const adminId=req.userId;
    const{title,description,imageurl,price}=req.body;


   const course= await courseModel.create({
        title:title,
        price:price,
        imageUrl:imageurl,
        description:description,
        creatorId:adminId

    })

    res.json({ 
        message: "course created", 
        courseId:course._id
    }
    )

});

adminRouter.put('/', function (req, res) {

    //need to implement this here 
    res.json({ message: "course updated" });
});

adminRouter.put('/bulk', function (req, res) {
    res.json({ message: "bulk course update" });
});

module.exports = {
    adminRouter
};
