const express=require('express');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const {UserModel}=require('./db')

const mongoose=require('mongoose');
const app=express();
const {z}=require('zod');

mongoose.connect("mongodb+srv://pawarsarthak24:7M4Q5Dff96Sbsvg@cluster0.hfgknhp.mongodb.net/restaurantwaste")
const JWT_SECRET='welcomesarthakpawar';


app.use(express.json());

app.post('/signup', async function (req, res) {
  const requireBody = z.object({
    email: z.string().min(3).max(100).email(),
    name: z.string().min(3).max(100),
    password: z.string().min(3).max(30)
  });

  // use safeParse (not safe.parse)
  const parsed = requireBody.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      message: 'incorrect details here'
    });
  }

  // destructure validated data
  const { name, email, password } = parsed.data;

  const hashedPassword = await bcrypt.hash(password, 2);

  await UserModel.create({
    email,
    password: hashedPassword,
    name
  });

  res.json({
    message: 'user logged in'
  });
});


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

function auth(req,res,next)
{
  try{
              const token=req.headers['token'];
    if(!token)
    {
        return res.status(401).json({message:"token missing"});
    }
    const decodedData=jwt.verify(token,JWT_SECRET);
    req.userId=decodedData.id;
    next();
  }
  catch(err)
  {
        return res.status(403).json({message:"token invalid"});
  }
}


app.post('/ping',auth,function(req,res)
{
    res.json({
        message:"this thing is done here"
    })
})


app.listen(3000);