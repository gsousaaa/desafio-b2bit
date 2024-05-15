
interface FieldProps {
    type: string,
    value: string,
    nameTitle: string,
}

export const Field: React.FC<FieldProps> = ({ type, value, nameTitle }) => {

    return (
        <>
            <label>Your <b>{nameTitle}</b></label>
            <input  className="outline-none cursor-auto bg-slate-100 text-black w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-gray-100 text-sm font-medium" type={type} value={value} readOnly />
        </>

    )
}   