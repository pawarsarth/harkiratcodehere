const express=require('express')
const {userRouter}=require('./routes/user')
const {courseRouter}=require('./routes/courses')

const app=express();

app.use(express.json())

app.use("/user",userRouter)
app.use("/courses",courseRouter)





app.listen(3000)