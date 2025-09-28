const express=require('express');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');

const mongoose=require('mongoose');
const app=express();
const {z}=require('zod');

mongoose.connect("mongodb+srv://pawarsarthak24:7M4Q5Dff96Sbsvg@cluster0.hfgknhp.mongodb.net/restaurantwaste")
const JWT_SECRET='welcome sarthak pawar';


app.use(express.json())
app.post('/singup', async function(req,res){
    const requireBody=z.object({
        email:z.string.min(3).max(100).email(),
        name:string().min(3).max(100),
        password:z.string().min(3).max(30)
    })

    const parsedDataWithSuccess=requireBody.safe.pare(req.body);

    if(!parsedDataWithSuccess)
    {
        res.json({
            message:'incorrect details here'
        })
    }

    const hashedPassword=await bcrypt.hash(password,2)

    await UserModel.create({
        email:email, 
        password:hashedPassword,
        name:name
    })
    res.json({
        message:"user logged in"
    })
    
})

app.post('/login',async function(req,res)
{
    email=req.body.email;
    password=req.body.password;
    
    const user=await UserModel.findOne({email})

    if(!user)
    {
        res.status(403).json({
            message:"user does not exsist"
        })
        return 
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
            message:"incorrect credentails"
        })
    }


})







app.get('/',function(req,res){

    req.json({
        message:"this thing also done here"
    })

})
app.post('/ping',function(req,res)
{
    res.json({
        message:"this thing is done here"
    })
})


app.listen(3000);