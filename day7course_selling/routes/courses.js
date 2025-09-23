const {Router}=require('express')

const courseRouter=Router()


courseRouter.post('/purchase',function(req,res){

    res.json({
        message:"purchses here"
    })
})

courseRouter.get('/preview',function(req,res){
        res.json({
            message:"courses"
        })
})

module.exports({
    courseRouter:courseRouter
})