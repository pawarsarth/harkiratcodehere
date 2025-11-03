import {Client} from 'pg';
import express from 'express';
const app=express()
app.use(express.json())

const pgClient=new Client('postgresql://neondb_owner:npg_EC7pqjdNcUf0@ep-red-sound-a4iifadq-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require')
 pgClient.connect();

app.post('/signup',(req,res)=>{
  const username=req.body.username;
  const password=req.body.password;
  const email=req.body.email;
  // console.log(username+''+password)

    const insert_query=`insert into users (username,email,password) values ($1,$2,$3)`;

    const responsce=pgClient.query(insert_query,[username,email,password])

  // const responsce=pgClient.query(`insert into users (username,email,password) values ('${username}','${password}','${email}')`) sql injection error will don here

  res.json({
    message:"you have signed up here"
  })
})

app.listen(3000)