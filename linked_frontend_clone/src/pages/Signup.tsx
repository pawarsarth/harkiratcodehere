import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { Navigate, useNavigate } from "react-router-dom";

export function Signup()
{
    const usernameRef=useRef<any>('')
    const passwordRef=useRef<any>('')
    const emailRef=useRef<any>('')
    const navigate =useNavigate()

      async  function  singup()
        {
            const username=usernameRef.current.value;
            const password=passwordRef.current.value;
            const email=emailRef.current.value;

            await axios.post(`${BACKEND_URL}/api/v1/signup`,{
                username,
                password,
                email
            })
            alert('you have signed in')
            navigate('/signin')
                
        }

return (
  <div className="h-screen w-screen by-gray-200 flex justify-center items-center">

    <div className="bg-white border min-w48 pt-8">
        <Input reference={usernameRef} placeholder="username"></Input>        
        <Input reference={passwordRef} placeholder="password"></Input>
        <Input reference={emailRef} placeholder="email"></Input>

        <div className="flex justify-center pt-4">
            <Button onClick={singup} varient="primary" text="sign" fullWidth={true}></Button>
        </div>

    </div>

  </div>
)
}