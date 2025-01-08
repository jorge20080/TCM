import { Router } from 'express';
import { postLogin, postLogout, postSignup, putGenerateResetToken, putResetPassword, putVerifyEmail } from '../controller/auth.js';
import { loginValidation, signupValidation } from '../data-schemas/auth.js';
import { validateData } from '../middlewares/validate-data.js';
import { protectedRoute } from '../middlewares/protected-route.js';

const authRouter = Router();

authRouter.post("/signup", validateData(signupValidation), postSignup);
authRouter.post("/login", validateData(loginValidation), postLogin);
authRouter.post("/logout", protectedRoute, postLogout);
authRouter.put("/verifyemail", putVerifyEmail);
authRouter.put("/generateresettoken", putGenerateResetToken);
authRouter.put("/resetpassword", putResetPassword);

export default authRouter;