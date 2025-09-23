const express=require('express')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')


const mongoose=require('mongoose')
const app=express()
const {UserModel,TodoModel}=require('./db')
const {z}=require ('zod')
app.use(express.json())
mongoose.connect('mongodb+srv://pawarsarthak24:7M4Q5Dff96Sbsvg@cluster0.hfgknhp.mongodb.net/todonewdb')

const JWT_SECRET='welcoemsarhak@123'

app.post('/singup',async function(req,res){

  const requireBody=z.object({
    email:z.string().min(3).max(100).email(),
    name:z.string().min(3).max(100),
    password:z.string().min(3).max(30)
  })

  const parsedDataWithSuccess=requireBody.safe.parse(req.body)

  if(!parsedDataWithSuccess)
  {
    res.json({
      message:"incorretc message here"
    })
    return
  }

    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password 
    
    const hashedPassword=await bcrypt.hash(password,2)
    console.log(hashedPassword)

   await UserModel.create({
        email:email,
        password:hashedPassword,
        name:name
    })
    res.json({
        message:"user logged in is done "
    })

})
app.post('/login', async function(req, res) {
  const email = req.body.email;
  const password = req.body.password;
  
  const user = await UserModel.findOne({email});

  if(!user){
    res.status(403).json({
        message:"user does not exits "
    })
    return 
  }

  const passwordmatch=await bcrypt.compare(password,user.password)


  if (passwordmatch) {
    const token = jwt.sign({ id: user._id }, JWT_SECRET);
    res.json({ token });
  } else {
    res.status(403).json({ message: "Incorrect credentials" });
  }
});

function auth(req, res, next) {
  try {
    const token = req.headers['token']; // or req.headers.authorization
    if (!token) {
      return res.status(401).json({ message: "Token missing" });
    }

    const decodedData = jwt.verify(token, JWT_SECRET);
    req.userId = decodedData.id; // must match what you put in jwt.sign

    next();
  } catch (err) {
    // token invalid / expired
    return res.status(403).json({ message: "Invalid token" });
  }
}


app.post('/todo', auth, async function (req, res) {
  try {
    const userId = req.userId;
    const { title, done = false } = req.body;

    const todo = await TodoModel.create({
      userId,
      title,
      done
    });

    res.json(todo); // send created todo back
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/todos',auth,async function(req,res){
    const userId=req.userId
    const todos=await TodoModel.find({
        userId:userId
    })

    res.json({
        todos
    })

})


app.listen(3000)

