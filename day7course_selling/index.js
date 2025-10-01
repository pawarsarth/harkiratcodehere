const express = require('express');
const {mongoose}=require('mongoose');
require('dotenv').config()
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

     await mongoose.connect(process.env.MONGO_DB_URL)
    app.listen(3000, ()=> console.log('Server running on 3000'));
}
main()
