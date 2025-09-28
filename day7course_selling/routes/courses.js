const { Router } = require('express');
const courseRouter = Router();

courseRouter.post('/purchase',(req,res)=>{
    res.json({
        message:"purchses here"
    });
});

courseRouter.get('/preview',(req,res)=>{
    res.json({
        message:"courses"
    });
});

module.exports = { courseRouter }; // ✅
