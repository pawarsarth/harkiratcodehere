import express from 'express'
import jwt from 'jsonwebtoken';
import { content,link,user } from './db.js';
import bcrypt, { hash } from 'bcrypt'
import z from 'zod'
import { userMiddleware } from './middleware.js';
import mongoose from "mongoose";
import { random } from './utils.js';
import cors from 'cors'


const app = express()


app.use(express.json())

app.use(cors({
  origin: "http://localhost:5173", // ✅ no trailing slash
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
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
    const token = jwt.sign({ id: oneman._id }, JWT_SECRET);

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
    console.log('content added')

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

app.delete('/api/v1/delete', userMiddleware, async (req, res) => {
  try {
    const { contentId } = req.body;
    //@ts-ignore
    const userId = new mongoose.Types.ObjectId(req.userId);

    const result = await content.deleteOne({
      _id: new mongoose.Types.ObjectId(contentId),
      userId
    });

    console.log("Delete result:", result);

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Content not found or unauthorized" });
    }

    res.json({ message: "Content deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post('/api/v1/share', userMiddleware,async(req, res) => {

   const share=req.body.share;
   if(share)
   {
        const exitLink=await link.findOne({
          //@ts-ignore
          userId:req.userId
        })

        if(exitLink)
        {
          res.json({
            hash:exitLink.hash
          })
          return;
        }
        const hash=random(10)
        await link.create({
          //@ts-ignore
          userId:req.userId,
          hash:hash
        })

   }
   else 
   {
    await link.deleteOne({
      //@ts-ignore
      userId:req.userId
    })
   }

   res.json({
    message:"updaet link done "
   })

})
app.get('/api/v1/brain/:shareLink', async (req, res) => {
  const hash=req.params.shareLink;

  const link1=await link.findOne({
      hash 
  })
  if(!link1)
  {
    res.json({
      message:"link not found here"
    })
    return;
  }

const con= await content.findOne({
  userId:link1.userId
})

const us1= await user.findOne({
    _id:link1.userId
})

res.json({
  content:con,
  username:us1?.username
})

  })


app.listen(3000)




