import { useRef, useState } from 'react'
import { Button } from './Button'
import { CrossIcon } from './CrossIcon'
import { Input } from './Input'
import axios from 'axios'
import { BACKEND_URL } from '../config'

const enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
}

export function CreateContentModel({ open, onClose }) {
    const useTitle=useRef<any>('')
    const useLink =useRef<any>('')
    const [type,setType]=useState(ContentType.Youtube)

       async function addContent()
        {
                const title=useTitle.current?.value;
                const link=useLink.current?.value;
                await axios.post(`${BACKEND_URL}/api/v1/content`,{
                    title,
                    link,
                    type
                },{
                    headers:{
                        "token":localStorage.getItem("token")
                    }
                }

            )
        }

    return (
        <div>
            {open && <div className="w-screen h-screen bg-slate-200 fixed top-0 left-0 opacity-60 flex justify-center">
                <div className="flex flex-col justify-center">
                    <span className="bg-white opacity-100 p-4 rounded-2xl">
                        <div className="flex justify-center">
                          <div onClick={onClose} className='cursor-pointer'>
                              <CrossIcon />
                          </div>
                        </div>
                        <div>
                            <Input reference={useTitle} placeholder='title'></Input>
                            <Input reference={useLink} placeholder='link'></Input>
                        </div>
                        <div>
                            <h1>Select Type</h1>
                            <div className='flex gap-1'>
                            <Button text='Youtube' varient={type===ContentType.Youtube?'primary':'secondary'} onClick={
                                ()=>{
                                    setType(ContentType.Youtube)
                                }
                            }></Button>

                            <Button text='Twitter' varient={type===ContentType.Twitter?'primary':'secondary'} onClick={
                                ()=>{
                                    setType(ContentType.Twitter)
                                }
                            }></Button>
                            </div>
                        </div>
                        <div className='flex justify-center mt-3'>
                            <Button onClick={addContent} varient='primary' text='Submit'></Button>


                        </div>
                    </span>
                </div>

            </div>}
        </div>
    )
}

