const { Router } = require('express');
const userRouter = Router();

userRouter.post('/signup', (req,res)=>{
    res.json({
        message:"welcome"
    });
});

userRouter.post('/signin',(req,res)=>{
    res.json({
        message:"post user signin"
    });
});

userRouter.get('/purchases',(req,res)=>{
    res.json({
        message:"purchases"
    });
});

module.exports = { userRouter };  // ✅
