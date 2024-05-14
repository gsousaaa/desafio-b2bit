interface InputProps  {
    type: string,
    placeholder: string,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    name?: string,

}

export const Input: React.FC<InputProps> = ({type, placeholder, value, onChange, name}) => {
    return (
            <input className=' bg-gray-200 text-black w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'type={type} placeholder={placeholder} value={value} onChange={onChange} name={name}/>
    )
}

