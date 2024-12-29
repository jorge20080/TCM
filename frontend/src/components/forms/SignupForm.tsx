import { Link } from "react-router-dom";
import Button from "../elements/Button";
import TextBox from "../elements/TextBox";
import Logo from "../Logo";

const SignupForm = () => {
    return (
        <div className="min-h-screen grid bg-gray-50">
            <form className="shadow-2xl px-10 py-12 md:w-[450px] md:m-auto bg-white">
                <Logo className="text-center mb-8" />
                <div className="md:flex gap-4 justify-between w-full">
                    <TextBox label="Given Name" name="givenName" type="text" placeholder="John" />
                    <TextBox label="Last Name" name="lastName" type="text" placeholder="Doe" />
                </div>
                <div className="md:flex gap-4 justify-between w-full">
                    <TextBox label="Company Name" name="companyName" type="text" placeholder="TCM" />
                    <TextBox label="Email" name="email" type="text" placeholder="john@mail.com" />
                </div>
                <div className="md:flex gap-4 justify-between w-full">
                    <TextBox label="Password" name="password" type="password" placeholder="Pass123" />
                    <TextBox label="Confirm Password" name="confirmPassword" type="password" placeholder="Pass123" />
                </div>
                <Button>Sign Up</Button>
                <p className="text-gray-400 text-center text-sm mt-8">Already have an account? <Link to="/login" className="text-blue-500">Sign in</Link></p>
            </form>
        </div>
    )
}
export default SignupForm;