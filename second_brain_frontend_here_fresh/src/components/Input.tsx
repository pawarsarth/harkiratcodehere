 export function Input({  placeholder,reference }: { placeholder:string; reference?:any}) {
    return (
        <div>

            <input ref={reference} placeholder={placeholder} type="text" className='px-4 py-2 border rounded-2xl mt-3'  />
        </div>
    )
}