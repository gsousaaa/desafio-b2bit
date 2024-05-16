import { useEffect } from "react";
import {useNavigate } from "react-router-dom";

interface PrivateProps {
    children: JSX.Element,
    isAuth: boolean,
    redirect: string
}

export const PrivateRoute = ({children, isAuth, redirect}: PrivateProps) => {
    const navigate = useNavigate();

    useEffect(() => {
        const handleStorageChange = (event: StorageEvent) => {
            if(event.key === "accessToken" && event.newValue === null) {
                navigate(redirect);
            }
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        }
    }, [navigate])

     return isAuth ? (
        <>
        {children}
        </>
    ) :  null

    
    
}