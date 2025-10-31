//@ts-ignore
import { ReactElement } from "react";

interface butttonProps{
  varient:'primary'|'secondary',
  text:string,
  startIcon?:ReactElement

}
const varientClass ={
  "primary":"bg-purple-600 text-white",
  "secondary":"bg-purple-200 text-purple-400"

}
const defaultStyle='px-4 py-2 rounded-md'

export function Button({varient,text,startIcon}:butttonProps)
{
    return(
      <button className={varientClass[varient] +" "+defaultStyle}>{text}</button>
    )
}