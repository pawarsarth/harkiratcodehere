const express = require('express');
const {mongoose}=require('mongoose');

const app = express();
app.use(express.json());



const { userRouter } = require('./routes/user');
const { courseRouter } = require('./routes/courses');
const {adminRouter}=require('./routes/admin')


app.use('/user', userRouter);
app.use('/courses', courseRouter);
app.use('/admin',adminRouter)



 async  function  main()
{

     await mongoose.connect("mongodb+srv://pawarsarthak24:7M4Q5Dff96Sbsvg@cluster0.hfgknhp.mongodb.net/couseSellingWebsite")
    app.listen(3000, ()=> console.log('Server running on 3000'));
}
main()
