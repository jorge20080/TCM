import { createContext } from "react"

type TAuthContext = {
    isUserLogged: boolean,
    login: () => void,
    logout: () => void
}

export const authContext = createContext({} as TAuthContext);