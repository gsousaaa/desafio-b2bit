
interface ButtonProps {
    children: React.ReactNode,
    onClick?: () => void,
    type: "button" | "submit",

} 

export const Button = ({children, onClick, type}: ButtonProps) => {

    return (
        <button className="text-white font-mono px-40 py-2 bg-blue-950 rounded-md text-xl" onClick={onClick} type={type}>{children}</button>
    ) 
}

