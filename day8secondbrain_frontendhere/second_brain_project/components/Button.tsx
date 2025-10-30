//@ts-ignore
import { ReactElement } from "react"

interface but{
  title:string,
  size:'lg'|'sm'|'md',
  startIcon?:ReactElement,
  endIcon?:ReactElement
}
const sizeStyles={
  "lg":"px-8 py-4 txt-xl",
  "md":'px-4 px-2 txt-md',
  "sm":"px-2 px-1 txt-sm"
}

export function Button(props:but){

  return <button className={sizeStyles[props.size]}>
    {props.title}
  </button>
}
{/* <Button title='welcome'></Button> */}


// import type { ReactElement } from "react"

// export interface ButtonPorps{
//   varient :"primary"|'secondary',
//   size:'sm'|'md'|'lg',
//   text:string,
//   startIcon?:ReactElement, // after adding the question mark the paramater become optional here 
//   endIcon?:ReactElement, // if we do not add this the eroptional get removeed from it 
//   onClick?:()=>void 

// }


// export const Button=(props:ButtonPorps)=>{
//   return <button>props.text </button>
// }