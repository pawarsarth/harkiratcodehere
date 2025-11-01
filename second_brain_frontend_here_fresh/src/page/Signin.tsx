import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function Signin()
{
  return (
    <div className="h-screen w-screen by-gray-200 flex justify-center items-center">
      <div className="bg-white  border min-w-48 pt-8">
        <Input placeholder="usernmae"></Input>
        <Input placeholder="password"></Input>
        
        <div className="flex justify-center pt-4">
        <Button varient="primary" text="sign here" fullWidth={true}></Button>
          </div>
      </div>

    </div>
  )
}