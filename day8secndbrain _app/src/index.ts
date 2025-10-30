import express from 'express'
import jwt from 'jsonwebtoken';
import { content,user } from './db.js';
import bcrypt from 'bcrypt'
import z from 'zod'
import { userMiddleware } from './middleware.js';



const app = express()
app.use(express.json())
const JWT_SECRET='3rnrj3rj3rn'

app.post('/api/v1/signup', async (req, res) => {

    const requireBody = z.object({
        username: z.string().min(3),
        password: z.string()
    })
    const parsed = requireBody.safeParse(req.body)

    if (!parsed.success) {
        return res.status(400).json({
            message: "incorrect details"
        })
    }
    const { username, password } = parsed.data;

    const hashedPassword = await bcrypt.hash(password, 2)

    try {
        user.create({
            username: username,
            password: hashedPassword
        })

        res.json({
            message: "welcome"
        })
    }
    catch (e) {
            res.status(411).json({
                message:"error occured "
            })
    }

})
app.post("/api/v1/signin", async (req, res) => {
  try {
    const { username, password } = req.body;

    // 🧠 1️⃣ Find user by username
    const oneman = await user.findOne({ username: username });

    if (!oneman) {
      return res.status(403).json({
        message: "User does not exist",
      });
    }

    // 🔒 2️⃣ Compare password safely
    const passwordMatch = await bcrypt.compare(password, oneman.password);

    if (!passwordMatch) {
      return res.status(403).json({
        message: "Incorrect credentials",
      });
    }

    // 🪪 3️⃣ Generate JWT token
    const token = jwt.sign({ id: oneman._id }, JWT_SECRET, { expiresIn: "1h" });

    // ✅ 4️⃣ Send success response
    res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    console.error("Error during signin:", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

app.post('/api/v1/content',userMiddleware, async (req, res) => {

    const link=req.body.link;
    const type=req.body.type;
    const title=req.body.title;

    await content.create({
        link:link,
        type:type,
      //@ts-ignore
        userId:req.userId,
        tags:[],
        title:title
    })
      res.json({
        message:"content addede here"
      })

})

app.get('/api/v1/content',userMiddleware,async (req,res)=>{
    //@ts-ignore
  const userId=req.userId;

  const content1=await content.find({
    userId:userId
  }).populate("userId","username")
  res.json({
    content1
  })

})

app.delete('/api/v1/delete',userMiddleware,async  (req, res) => {

  const contentId=req.body.contentId;

  await content.deleteMany({
    contentId,
    //@ts-ignore
    userId:req.userId
  })
  res.json({
    message:"content deleted "
  })

//conten is not deleting check it ones 
})
app.post('/api/v1/share', (req, res) => {

})
app.get('/api/v1/brain/:shareLink', (req, res) => {

})
app.listen(3000)




