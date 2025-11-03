import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function Signin()
{
  const usernmaeRef=useRef<any>('')
  const passwordRef=useRef<any>('')
  const navigate=useNavigate()

 async function signup()
  {
      const username=usernmaeRef.current.value;
      const password=passwordRef.current.value;
      
      await axios.post(`${BACKEND_URL}/api/v1/signup`,{
        username,
        password
      })
      alert('you have signed in ')
      navigate('/signup')
  }
  return (
    <div className="h-screen w-screen by-gray-200 flex justify-center items-center">
      <div className="bg-white  border min-w-48 pt-8">
        <Input reference={usernmaeRef} placeholder="usernmae"></Input>
        <Input reference={passwordRef} placeholder="password"></Input>
        
        <div className="flex justify-center pt-4">
        <Button onClick={signup} varient="primary" text="sign here" fullWidth={true}></Button>
          </div>
      </div>

    </div>
  )
}