const express=require('express')

const app=express();

app.use(express.json())

app.post('/user/signup',function(req,res){
    res.json({

    })
})

app.post('/user/signin',function(req,res){

    res.json({
        message:"post user signin"
    })
})
app.get('/user/purchases',function(req,res){
    res.json({
        message:"purchases"
    })

})
app.post('/course/purchase',function(req,res){

    res.json({
        message:"purchses here"
    })
})

app.get('/courses',function(req,res){
        res.json({
            message:"courses"
        })
})


app.listen(3000)