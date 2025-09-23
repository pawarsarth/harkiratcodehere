
const {Router}=require('express')

const userRouter=Router()

userRouter.post('/signup',function(req,res){
    res.json({

    })
})

userRouter.post('/signin',function(req,res){

    res.json({
        message:"post user signin"
    })
})
userRouter.get('/purchases',function(req,res){
    res.json({
        message:"purchases"
    })

})

module.exports={
    userRouter:userRouter
}