import { NextFunction, Request, Response } from "express";
import { User } from "../data-access-layer/user";
import { ErrorResponse } from "../utils/ErrorResponse";

export const postSignup = async (req: Request, res: Response, next: NextFunction) => {
    const { givenName, lastName, email, password } = req.body;
    const user = new User({ givenName, lastName, email, password });
    const { error, sucess } = await user.save();
    if (error) return next(error);
    res.json({ message: "user created", sucess });
}

export const postLogin = async (req: Request, res: Response) => {
    res.json();
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