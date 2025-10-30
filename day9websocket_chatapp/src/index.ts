import {WebSocketServer,WebSocket} from 'ws'

const wss=new WebSocketServer({port:8080})
interface User {
    socket:WebSocket,
    room:string
}

let allSocket:User[]=[];  // array of object 

let userCout=0

wss.on('connection',(socket)=>{


    socket.on('message',(message)=>{
        //@ts-ignore
            const parsedMessage=JSON.parse(message)
            if(parsedMessage.type=='join')
            {
                allSocket.push({
                    socket,
                    room:parsedMessage.payload.roomId
                })
            }
            if(parsedMessage.type=='chat')
            {
                const currentUserRoom=allSocket.find(x=> x.socket==socket)?.room

                for(let i=0;i<allSocket.length;i++)
                {
                    if(allSocket[i]?.room==currentUserRoom)
                    {
                        allSocket[i]?.socket.send(parsedMessage.payload.message)
                    }
                }

            }
    })

    socket.on('disconnect',()=>{

    })
})

// wss.on('connection',(socket)=>{
//     allSocket.push(socket)
//     userCout=userCout+1;
//     console.log('user count here is '+userCout)

//     socket.on("message",(message)=>{
//         console.log('message recieved here '+message.toString())
//     //  for (let i=0;i<allSocket.length;i++)
//     //  {
//     //     const s=allSocket[i];
//     //     //@ts-ignore
//     //     s.send(message.toString())
//     //  }
//     allSocket.forEach(s=>{
//         s.send(message.toString())
//     })

//     //delete the socket connect which left 

//     socket.on('disconnect',()=>{
//         allSocket=allSocket.filter(x=>x!=socket)
//     })
        
//     })
    
// })
