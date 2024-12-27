import { ReactNode, useState } from "react";
import { authContext } from "../../context/auth-context";

type TProps = {
    children: ReactNode
}

export const AuthProvider = ({ children }: TProps) => {
    const isLogged = localStorage.getItem("isLogged") === "true" || false;
    const [isUserLogged, setIsUserLogged] = useState(isLogged);

    const login = () => {
        setIsUserLogged(true);
        localStorage.setItem("isLogged", "true");
    }

    const logout = () => {
        setIsUserLogged(false);
        localStorage.setItem("isLogged", "false");
    }
    return (
        <authContext.Provider value={{ isUserLogged, login, logout }}>
            {children}
        </authContext.Provider>
    )
}
