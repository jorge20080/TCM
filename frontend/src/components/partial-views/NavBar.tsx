import { use } from "react";
import Logo from "../Logo";
import NavigationLink from "../NavLink";
import { authContext } from "../../context/auth-context";
import { useFetch } from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import Button from "../elements/Button";

const NavBar = () => {
    const navigate = useNavigate();
    const { isUserLogged, logout } = use(authContext);
    const { error, execute } = useFetch({
        url: "http://localhost:3000/api/auth/logout",
        method: "POST",
        credentials: true
    });

    const logoutAction = async () => {
        await execute(undefined, false);
        if (error === undefined) {
            logout();
            navigate("/login");
            return;
        }
    }

    return (
        <nav className="flex justify-between px-10 mb-6 items-center py-4">
            <Logo />
            <ul className="flex gap-8">
                <li>
                    <NavigationLink href="/test">Test</NavigationLink>
                </li>
                <li>
                    {isUserLogged ?
                        <Button
                            onClick={() => isUserLogged ? logoutAction() : undefined}
                            className="bg-red-400 text-white py-1 px-2 rounded"
                        >
                            Logout
                        </Button>
                        :
                        <Button
                            onClick={() => navigate("/login")}
                        >
                            Log In
                        </Button>

                    }
                </li>
            </ul >
        </nav >
    )
}
export default NavBar;