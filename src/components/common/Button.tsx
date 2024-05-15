
interface ButtonProps {
    children: React.ReactNode,
    onClick?: () => void,
    type: "button" | "submit",

} 

export const Button = ({children, onClick, type}: ButtonProps) => {

    return (
        <button className="text-white px-40 py-3 bg-blue-950 rounded-md text-base font-semibold" onClick={onClick} type={type}>{children}</button>
    ) 
}

