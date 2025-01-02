import { Link, useNavigate } from "react-router-dom";
import Button from "../elements/Button";
import TextBox from "../elements/TextBox";
import Logo from "../Logo";
import { useFetch } from "../../hooks/useFetch";
import { useActionState, useEffect } from "react";
import { TSignupParams, TSignUpResponse } from "../../types/signup";

const SignupForm = () => {
    const navigate = useNavigate();
    const { error, data, execute } = useFetch<TSignUpResponse>({
        url: "http://localhost:3000/api/auth/signup",
        method: "POST",
        credentials: true
    });

    const [state, signUpAction] = useActionState(async (_prevState: TSignupParams, formData: FormData) => {
        const data: TSignupParams = {
            givenName: formData.get("givenName")?.toString() || "",
            lastName: formData.get("lastName")?.toString() || "",
            email: formData.get("email")?.toString() || "",
            password: formData.get("password")?.toString() || "",
            confirmPassword: formData.get("confirmPassword")?.toString() || ""
        }
        await execute(data);
        return data;
    }, { givenName: "", lastName: "", email: "", password: "", confirmPassword: "" })

    useEffect(() => {
        if (data?.success) {
            navigate("/login");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data?.success]);

    return (
        <div className="min-h-screen grid bg-gray-50">
            <form action={signUpAction} className="shadow-2xl px-10 py-12 md:w-[450px] md:m-auto bg-white">
                <Logo className="text-center mb-8 mx-auto" />
                <div className="md:flex gap-4 justify-between w-full">
                    <TextBox error={error?.givenName} defaultValue={state.givenName} label="Given Name" name="givenName" type="text" placeholder="John" />
                    <TextBox error={error?.lastName} defaultValue={state.lastName} label="Last Name" name="lastName" type="text" placeholder="Doe" />
                </div>
                <div className="md:flex gap-4 justify-between w-full">
                    <TextBox label="Company Name" name="companyName" type="text" placeholder="TCM" />
                    <TextBox error={error?.email} defaultValue={state.email} label="Email" name="email" type="text" placeholder="john@mail.com" />
                </div>
                <div className="md:flex gap-4 justify-between w-full">
                    <TextBox error={error?.password} defaultValue={state.password} label="Password" name="password" type="password" placeholder="Pass123" />
                    <TextBox error={error?.confirmPassword} defaultValue={state.confirmPassword} label="Confirm Password" name="confirmPassword" type="password" placeholder="Pass123" />
                </div>
                <Button>Sign Up</Button>
                <p className="text-gray-400 text-center text-sm mt-8">Already have an account? <Link to="/login" className="text-blue-500">Sign in</Link></p>
            </form>
        </div>
    )
}
export default SignupForm;