import { Router } from 'express';
import { postLogin, postSignup, putGenerateResetToken, putResetPassword, putVerifyEmail } from '../controller/auth';
import { validateData } from '../middlewares/validate-data';
import { signupValidation, loginValidation } from '../data-schemas/auth';

const authRouter = Router();

authRouter.post("/signup", validateData(signupValidation), postSignup);
authRouter.post("/login", validateData(loginValidation), postLogin);
authRouter.put("/verifyemail", putVerifyEmail);
authRouter.put("/generateresettoken", putGenerateResetToken);
authRouter.put("/resetpassword", putResetPassword);

export default authRouter;