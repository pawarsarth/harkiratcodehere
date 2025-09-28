const express = require('express');
const { userRouter } = require('./routes/user');
const { courseRouter } = require('./routes/courses');
const {adminRouter}=require('./routes/admin')

const app = express();
app.use(express.json());

app.use('/user', userRouter);
app.use('/courses', courseRouter);
app.use('/admin',adminRouter)

app.listen(3000, ()=> console.log('Server running on 3000'));
