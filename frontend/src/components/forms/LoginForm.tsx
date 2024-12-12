import { Link } from "react-router-dom";
import Button from "../elements/Button";
import TextBox from "../elements/TextBox";
import Logo from "../Logo";

const LoginForm = () => {
    return (
        <div className="min-h-screen grid bg-gray-50">
            <form className="shadow-2xl px-10 py-12 w-[400px] m-auto bg-white">
                <Logo className="text-center mb-8" />
                <TextBox label="Email" type="text" placeholder="john@mail.com" />
                <TextBox label="Password" type="password" placeholder="Pass123" />
                <p className="text-gray-400 -translate-y-4 text-end text-sm">Forgot password? <Link to="/" className="text-blue-500">Reset</Link></p>
                <Button>Sign In</Button>
                <p className="text-gray-400 text-center text-sm mt-8">Don't have an account yet? <Link to="/" className="text-blue-500">Register</Link></p>
            </form>
        </div>
    )
}
export default LoginForm;