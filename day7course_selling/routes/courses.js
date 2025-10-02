const { Router } = require('express');
const {userMiddleware}=require('../middleware/user');
const {purchaseModel,courseModel}=require("../db")
const courseRouter = Router();

courseRouter.post('/purchase',userMiddleware,async  (req,res)=>{

    
    const userId=req.userId;
    const courseId=req.body.couserId;
        await purchaseModel.create({
            userId,
            courseId
        })
    res.json({
        message:"couser purchase is done here"
    });
});

courseRouter.get("/preview", async function(req, res) {
    
    const courses = await courseModel.find({});

    res.json({
        courses
    })
});


module.exports = { courseRouter }; // ✅
