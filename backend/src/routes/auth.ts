import { Router } from 'express';
import { z } from 'zod';
import { postLogin, postSignup, putGenerateResetToken, putResetPassword, putVerifyEmail } from '../controller/auth';

const authRouter = Router();

const signupValidation = z.object({
    givenname: z.string().min(2, { message: "Given Name should be at least 2 characters" }),
    lastname: z.string().min(2, { message: "Last Name should be at least 2 characters" }),
    email: z.string().email(),
    password: z.string().min(8, { message: "Password should be at least 8 characters" }),
    confirmPassword: z.string()
}).refine(({ confirmPassword, password }) => confirmPassword === password, { message: "Password do not match" });

const loginValidation = z.object({
    email: z.string().email(),
    password: z.string().min(8, { message: "Password should be at least 8 characters" }),
});

authRouter.post("/signup", postSignup);
authRouter.post("/login", postLogin);
authRouter.put("/verifyEmail", putVerifyEmail);
authRouter.put("/generateResetToken", putGenerateResetToken);
authRouter.put("/resetPassword", putResetPassword);

export default authRouter;