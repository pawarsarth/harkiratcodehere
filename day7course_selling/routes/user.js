const { Router } = require('express');
const userRouter = Router();
const {JWT_SECRET}=require('../config')
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

userRouter.get('/purchases',(req,res)=>{
    res.json({
        message:"purchases"
    });
});

module.exports = { userRouter };  // ✅
