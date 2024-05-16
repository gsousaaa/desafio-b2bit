import { useEffect } from "react";
import {useNavigate } from "react-router-dom";

interface PrivateProps {
    children: JSX.Element,
    isAuth: boolean,
    redirect: string
}

export const PrivateRoute = ({children, isAuth, redirect}: PrivateProps) => {
    const navigator = useNavigate();

    useEffect(() => {
        const handleStorageChange = (event: StorageEvent) => {
            if(event.key === "accessToken" && event.newValue === null) {
                navigator(redirect);
            }
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        }
    }, [navigator])

     return isAuth ? (
        <>
        {children}
        </>
    ) :  null

    
    
}