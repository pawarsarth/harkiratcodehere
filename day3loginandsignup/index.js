const express=require('express')
const jwt=require('jsonwebtoken')

const app=express()
const JWT_SECRET='savetheworlfromdevin'
app.use(express.json())

// function generateToken(length = 16) {
//   const chars = "abcdefghijklmnopqrstuvwxyz";
//   let token = "";
//   for (let i = 0; i < length; i++) {
//     const randomIndex = Math.floor(Math.random() * chars.length);
//     token += chars[randomIndex];
//   }
//   return token;
// }


const users=[]
app.post('/signup',function(req,res)
{
        const username=req.body.username;
        const password=req.body.password;

if(users.find(u=>u.username===username))
{
    res.json({
        message:"you hvae already login here "
    })
}

        //check usernma lenght 
        // if(username.lenght<5)
        // {
        //     res.json({
        //         message:"no strong username us here or lenght is too small"
        //     })
        //     return;
        // }

        users.push({
            username:username,
            password:password 
        })

        res.json({
            message:"username is store here"
        })
        
})

app.post('/signin',function(req,res)
{

    const username=req.body.username;
    const password=req.body.password;

    const user =users.find(function(u){
        if(u.username===username && u.password==password)
        {
            const token=jwt.sign({
                username:username
            },JWT_SECRET)
            u.token=token;
            res.json({
                token:token
            })
        }
            
        else 
        {
            res.status(403).send({
                message:"failed to do login here"
            })
        }
    })
    console.log(users)
})

app.get('/me',function(req,res)
{
    const token=req.headers['authorization']
    const decodeInformation=jwt.verify(token,JWT_SECRET);
    const username=decodeInformation.username;
    console.log("token is ",token)
    const user=users.find(u=>u.username===username)
    
    if (user)
    {
        res.json({
            message:"done",
            username:user.username,
            password:user.password
        })
    }
    else {
        res.status(403).json({
            message:'not user found here'
        })
    }
})

app.listen(3000);

