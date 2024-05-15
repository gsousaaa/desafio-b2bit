import { Navigate } from "react-router-dom";

interface PrivateProps {
    children: JSX.Element,
    isAuth: boolean,
    redirect: string
}

export const PrivateRoute = ({children, isAuth, redirect}: PrivateProps) => {
    const token = localStorage.getItem('accessToken')

    return isAuth && token ? (
        <>
        {children}
        </>
    ) : (
        <Navigate to={redirect} replace/>
    )
}   