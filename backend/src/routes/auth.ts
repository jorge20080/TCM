import { Router } from 'express';
import { z } from 'zod';

const authRouter = Router();

const loginValidation = z.object({
    givenname: z.string().min(2, { message: "Given Name should be at least 2 characters" }),
    lastname: z.string().min(2, { message: "Last Name should be at least 2 characters" }),
    email: z.string().email(),
    password: z.string().min(8, { message: "Password should be at least 8 characters" }),
    confirmPassword: z.string()
}).refine(({ confirmPassword, password }) => confirmPassword === password, { message: "Password do not match" });

authRouter.get("/", (req, res) => {
    res.json({ message: "auth test" })
});
authRouter.post("/signup", (req, res) => {
    const { givenname, lastname, email, password } = req.body;
    const isValid = loginValidation.safeParse(req.body);
    res.json(isValid)
})

export default authRouter;