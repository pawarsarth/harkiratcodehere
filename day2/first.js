// console.log(fetch("https://sum-server.100xdevs.com/todos"))
//this is using the promise 
// function main()
// {
//     fetch("https://sum-server.100xdevs.com/todos")
//     .then(async (reponse) =>{
//         const json =await  response.json();
//         console.log(json)

// const { default: axios } = require("axios")

//     })
// }
// main()
// this is suing the await and asyc function 
// async function main()
// {
//     const res=  await fetch("https://sum-server.100xdevs.com/todos")
//     const json=await res.json()
//     console.log(json)
// }
// main()

// //now axios for it 
// const axios =require('axios')
// async function main()
// {
//     const reponse =await axios.get('https://sum-server.100xdevs.com/todos')
//     console.log(reponse.data)
//     //axios return data in the form of response.data
// }
// main()
const axios=require('axios')
async function main()
{
    const res=await axios.post("https://httpdump.app/dumps/b277437c-a7a1-4a79-9fae-b2e8313c56af?a=23",{
        'username':'sarthak',
        'password':'123'
    },{
        headers:{
            Authorization:"we are here "
        }
    })
}
async function main()
{
    const res=await axios.post("https://httpdump.app/dumps/b277437c-a7a1-4a79-9fae-b2e8313c56af?a=23",
    {
        headers:{
            Authorization:"we are here "
        }
    })
}
main()

//in get request we cannot send the body after url but we send the query parameter 
// in post we second will the bofy we can send similar for put patch and deleter also 