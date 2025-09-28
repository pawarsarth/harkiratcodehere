const {Router}=require('express')
const {adminModel}=require('../db')
const adminRouter=Router();

adminRouter.post('/signup',function(req,res){

})
adminRouter.post('/signin',function(req,res){

})
adminRouter.post('/course',function(req,res){

})
adminRouter.put('/course',function(req,res){
    res.json({
        message:"signup page is here"
    })
})
adminRouter.put('/course/bulk',function(req,res){
    res.json({
        message:"welome user"
    })
})

module.export={
    adminRouter:adminRouter 
}