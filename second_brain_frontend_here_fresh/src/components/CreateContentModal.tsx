import { Button } from './Button'
import { CrossIcon } from './CrossIcon'

export function CreateContentModel({ open, onClose }) {
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
                            <Input placeholder='title'></Input>
                            <Input placeholder='link'></Input>
                        </div>
                        <div className='flex justify-center mt-3'>
                            <Button varient='primary' text='Submit'></Button>


                        </div>
                    </span>
                </div>

            </div>}
        </div>
    )
}

function Input({ onChange, placeholder }: { onChange: () => void }) {
    return (
        <div>

            <input placeholder={placeholder} type="text" className='px-4 py-2 border rounded-2xl mt-3' onChange={onchange} />
        </div>
    )
}