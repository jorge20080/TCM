import { use, useEffect } from "react";
import LoginForm from "../components/forms/LoginForm";
import NotificationBanner from "../components/NotificationBanner";
import { authContext } from "../context/auth-context";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const { isUserLogged } = use(authContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (isUserLogged) {
            navigate("/");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
            <title>TCM - Login</title>
            <NotificationBanner />
            <LoginForm />
        </>
    )
}
export default LoginPage;