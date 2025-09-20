const express=require('express')
const app=express()


function checkAgeMiddleware(req,res,next)
{
    const age=req.query.n;
    if(age>18)
        next()
    else 
    {
        return res.json({
            msg:'error in code'
        })
    }
}

// app.use(checkAgeMiddleware)// use this when every function need it for usng this but here the roder matter  

app.get('/ride2',checkAgeMiddleware,function(req,res)
{
   
        res.json({
            msg:'done '
        })
    
    
    
})

app.get('/ride1',checkAgeMiddleware,function(req,res)
{
    
        res.json({
            msg:'done '
        })
    
    
    
})

app.listen(3000)