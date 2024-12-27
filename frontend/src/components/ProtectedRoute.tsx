import { ReactNode, use, useEffect } from "react";
import { authContext } from "../context/auth-context";
import { useNavigate } from "react-router-dom";

type TProps = {
    children: ReactNode
}

const ProtectedRoute = ({ children }: TProps) => {
    const navigate = useNavigate();
    const { isUserLogged } = use(authContext);

    useEffect(() => {
        if (!isUserLogged) navigate("/login");
    }, [navigate, isUserLogged]);

    return (
        <>
            {isUserLogged && children}
        </>
    )
}
export default ProtectedRoute;