import axios from "axios"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { BACKEND_URL } from "../config"
import { Button } from "../components/Button"
import { Input } from "../components/Input"

export function Signin()
{
    const usernameRef=useRef<any>('')
    const passwordRef=useRef<any>('')
    const navigate=useNavigate()

    async function signup()
    {
        const username=usernameRef.current.value;
        const password=passwordRef.current.value;

        const response =await axios.post(`${BACKEND_URL}/api/v1/signin`,{
            username,
            password
        })

        const jwt=response.data.token;
        localStorage.setItem("token",jwt)
        navigate('/dashboard')
    }

     return (
    <div className="h-screen w-screen by-gray-200 flex justify-center items-center">
      <div className="bg-white  border min-w-48 pt-8">
        <Input reference={usernameRef} placeholder="usernmae"></Input>
        <Input reference={passwordRef} placeholder="password"></Input>
        
        <div className="flex justify-center pt-4">
        <Button onClick={signup} varient="primary" text="sign here" fullWidth={true}></Button>
          </div>
      </div>

    </div>
  )
}