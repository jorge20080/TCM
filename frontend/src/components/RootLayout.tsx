import { Outlet } from "react-router-dom";
import NavBar from "./partial-views/NavBar";
import { authContext } from "../context/auth-context";
import { use } from "react";

const RootLayout = () => {
    const { isUserLogged } = use(authContext);
    return (
        <>
            <NavBar />

            <div className={`px-10 ${isUserLogged ? "ml-10 pt-6" : null}`}>
                <Outlet />
            </div>
        </>
    )
}
export default RootLayout;