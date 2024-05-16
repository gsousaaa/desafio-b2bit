import { useEffect } from "react";
import {useNavigate } from "react-router-dom";

interface PrivateProps {
    children: JSX.Element,
    isAuth: boolean,
    redirect: string
}

export const PrivateRoute = ({children, isAuth, redirect}: PrivateProps) => {
    const navigator = useNavigate()
    
    useEffect(() => {
        const token = localStorage.getItem('accessToken')
        if(!token) {
            navigator(redirect)
        }
    }, [isAuth])

     return isAuth ? (
        <>
        {children}
        </>
    ) :  null

    
    
}