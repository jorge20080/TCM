import { Link, useNavigate } from "react-router-dom";
import Button from "../elements/Button";
import TextBox from "../elements/TextBox";
import Logo from "../Logo";
import { useFetch } from "../../hooks/useFetch";
import { TLoginResponse } from "../../types/login";
import { useActionState, useEffect } from "react";

const LoginForm = () => {
    const navigate = useNavigate();
    const { error, data, execute } = useFetch<TLoginResponse>({
        url: "http://localhost:3000/api/auth/login",
        method: "POST",
        credentials: true,
    });
    useEffect(() => {
        if (data?.token) {
            navigate("/");
        }
    }, [data?.token, navigate]);


    const [, loginAction, isPending] = useActionState(async (previousState: void | null, formData: FormData) => {
        const email = formData.get("email")?.toString() || "";
        const password = formData.get("password")?.toString() || "";
        await execute({ email, password });
    }, null);

    return (
        <div className="min-h-screen grid bg-gray-50">

            <form action={loginAction} className="shadow-2xl px-10 py-12 w-[400px] m-auto bg-white">
                {error && <p>Error...</p>}
                {isPending && <p>Loading...</p>}
                <Logo className="text-center mb-8" />
                <TextBox label="Email" name="email" type="text" placeholder="john@mail.com" />
                <TextBox label="Password" name="password" type="password" placeholder="Pass123" />
                <p className="text-gray-400 -translate-y-4 text-end text-sm">Forgot password? <Link to="/" className="text-blue-500">Reset</Link></p>
                <Button disabled={isPending}>Sign In</Button>
                <p className="text-gray-400 text-center text-sm mt-8">Don't have an account yet? <Link to="/" className="text-blue-500">Register</Link></p>
            </form>
        </div>
    )
}
export default LoginForm;