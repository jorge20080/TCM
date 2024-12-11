import { Outlet } from "react-router-dom";
import NavBar from "./partial-views/NavBar";

const RootLayout = () => {
    return (
        <>
            <NavBar />

            <div className="px-10">
                <Outlet />
            </div>
        </>
    )
}
export default RootLayout;