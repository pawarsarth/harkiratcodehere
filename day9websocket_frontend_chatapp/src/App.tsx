import { spawn } from 'child_process'
import { useEffect, useState } from 'react'


function App() {
  const [message,setMessage]=useState(['hi there'])

  useEffect(()=>{
      const ws=new WebSocket('')
      ws.onmessage=(event)=>{
        setMessage(m=>[...m,event.data])
      }
  },[])

  return (
       <div className='h-screen bg-black'>
        <div className='h-[90vh] '>
          {message.map(message=> <div className='m-8'><span className='bg-white text-black rounded-2xl p-4 m-8 '>{message}</span></div>)}
        </div>

        <div className='w-full bg-white flex '>
          <input type="text" id='messsage'className='flex-1 p-4 '/>
          <button onClick={()=>{
            const message=document.getElementById('message')?.innerHTML;
            ws.send(JSON.stringify({
              type:"chat",
              payload:{
                message:message
              }

            }))
          }} className='bg-purple-600 text-white p-4 '></button>
        </div>
        

       </div>

  )
}

export default App
