import { Router } from 'express';
import { postLogin, postSignup, putGenerateResetToken, putResetPassword, putVerifyEmail } from '../controller/auth';
import { validateData } from '../middlewares/validateData';
import { signupValidation, loginValidation } from '../data-schemas/auth';

const authRouter = Router();

authRouter.post("/signup", validateData(signupValidation), postSignup);
authRouter.post("/login", validateData(loginValidation), postLogin);
authRouter.put("/verifyEmail", putVerifyEmail);
authRouter.put("/generateResetToken", putGenerateResetToken);
authRouter.put("/resetPassword", putResetPassword);

export default authRouter;