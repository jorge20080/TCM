import { Request, Response } from "express";
import { User } from "../model/user";

export const postSignup = async (req: Request, res: Response) => {
    const { firstName, lastName, email, password } = req.body;
    const user = new User({ firstName, lastName, email, password });
    const result = await user.save();

    if (!result) {
        res.status(400).json({ message: "error" })
        return;
    }

    res.json({ message: "added" });
}
export const postLogin = async (req: Request, res: Response) => {
    const user = await User.findBy({ email: "jorge2003@hotmail.com" });
    if (!user) {
        res.status(400).json({ message: "not found" });
        return;
    }
    res.json(user);
}
export const putVerifyEmail = (req: Request, res: Response) => {
    res.json();
}
export const putGenerateResetToken = (req: Request, res: Response) => {
    res.json();
}
export const putResetPassword = (req: Request, res: Response) => {
    res.json();
}