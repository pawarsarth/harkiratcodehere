//@ts-ignore
import { ReactElement } from "react"

export function SideBarItems({text,icon}:{
    text:string,
    icon:ReactElement
})
{
    return (
        <div className="flex cursor-pointer hover:bg-gray-200 rounded max-w-48 pl-4">
            <div className="p-3">
                {icon}
            </div>
            <div className="p-2">
                {text}
            </div>        
        </div>
    )
}