

export function Input({placeholder,reference}:{placeholder:string;reference?:any})
{
    return (
        <div>
                <input type="text" ref={reference} placeholder={placeholder} className="px-4 py-2 border rounded-2xl mt-3" />
        </div>
    )
}