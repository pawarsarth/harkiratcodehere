//@ts-ignore
import { ReactElement } from "react";

interface butttonProps{
  varient:'primary'|'secondary',
  text:string,
  startIcon?:ReactElement
  onClick?:()=> void,
    fullWidth?:boolean

}
const varientClass ={
  "primary":"bg-purple-600 text-white",
  "secondary":"bg-purple-200 text-purple-400"
  

}
const defaultStyle='px-4 py-2 rounded-md font-light flex items-center'

export function Button({varient,text,startIcon,onClick,fullWidth}:butttonProps)
{
    return(
      <button onClick={onClick} className={varientClass[varient] +" "+defaultStyle +`${fullWidth?"   w-full":""}`}>
        <div className="pr-2">
           {startIcon}
        </div>
        {text}</button>
    )
}