import { use } from "react";
import Logo from "../Logo";
import NavigationLink from "../NavLink";
import { authContext } from "../../context/auth-context";

const NavBar = () => {
    const { isUserLogged } = use(authContext);
    return (
        <nav className="flex justify-between px-10 mb-6 items-center py-4">
            <Logo />
            <ul className="flex gap-8">
                <li>
                    <NavigationLink href="/test">Test</NavigationLink>
                </li>
                <li>
                    <NavigationLink href={`/${isUserLogged ? "logout" : "login"}`} className={`${isUserLogged ? "bg-red-400 text-white py-1 px-2 rounded" : null}`}>{`${isUserLogged ? "Logout" : "Login"}`}</NavigationLink>
                </li>
            </ul>
        </nav>
    )
}
export default NavBar;