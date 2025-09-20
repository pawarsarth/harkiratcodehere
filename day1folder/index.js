
const express=require('express')
const app=express();
const fs=require('fs')


app.get('/files',function(req,res)
{

})

app.get('/file/:filename',function(req,res)
{
    const filename=req.params.filename;
    fs.readFile(filename,'utf-8',function(err,data)
{
    res.json({
        data
    })
})
})

app.listen('3000')


// const express=require('express')

// const app=express()
// app.use(express.json())
// var users=[{
//     name1:'sar',
//     kidneys:[{
//         healthy:true
//     },{
//         healthy:false
//     }]
// }]

// app.get('/',function(req,res)
// {
//         const ar=users[0].kidneys;
//         // console.log(ar)
//         const johnKideney=ar.length;
//         let healthKidney=0

//         for(let i=0;i<johnKideney;i++)
//         {
//             if(ar[i].healthy)
//             {
//                 healthKidney++;
//             }
//         }
//         const failKidneys=johnKideney-healthKidney;
//         // res.send('hi there'+failKidneys)
//         res.json({
//             johnKideney,
//             healthKidney,
//             failKidneys
//         })
// })
// app.post('/',function(req,res)
// {
//         const isHealthy1=req.body.isHealthy;
//         users[0].kidneys.push({
//             healthy:isHealthy1
//         })
//         res.json({
//             msg:'done'
//         })
// })
// app.put('/',function(req,res)
// {
//     for(let i=0;i<users[0].kidneys.length;i++)
//     {
//         users[0].kidneys[i].healthy=true;
//     }
//     res.json()

// })
// app.delete('/',function(req,res)
// {
//         const newKidneys=[]
//         for(let i=0;i<users[0].kidneys.length;i++)
//         {
//             if(users[0].kidneys[i].healthy)
//             {
//                 newKidneys.push({
//                     healthy:true 
//                 })
//             }
//         }
//         users[0].kidneys=newKidneys;

//        res.json({
//             msg:'done'
//         })
// })

// app.listen('3000')



// // const express=require("express");

// // const app=express()

// // function check1(n)
// // {
// //     let ans=0;
// //     for(let i=0;i<=n;i++)
// //     {
// //         ans=ans+i;
// //     }
// //     return ans 
// // }

// // app.get('/',function(req,res)
// // {
// //         const qu=req.query.n;
// //         console.log(qu)
// //         let ans=check1(qu)
// //         res.send('hi there'+ans)
// // })

// // app.listen(3000)