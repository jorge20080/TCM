import { use, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../context/auth-context";
import { useFetch } from "../hooks/useFetch";

const Logout = () => {
    const navigate = useNavigate();
    const { logout } = use(authContext);

    const { error, execute } = useFetch({
        url: "http://localhost:3000/api/auth/logout",
        method: "POST",
        credentials: true
    });

    useEffect(() => {
        execute().then(() => {
            logout();
            return navigate("/login");
        });
    }, []);

    return (
        <>
            {error && <div>Error Logging out</div>}
            <div>Logging out...</div>
        </>
    );
}
export default Logout;