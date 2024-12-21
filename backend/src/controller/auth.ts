import { NextFunction, Request, Response } from "express";
import { User } from "../data-access-layer/user";
import { ErrorResponse } from "../utils/ErrorResponse";

export const postSignup = async (req: Request, res: Response, next: NextFunction) => {
    const { givenName, lastName, email, password } = req.body;
    const user = new User({ givenName, lastName, email, password });
    const result = await user.save();
    if (!result) return next(new ErrorResponse({
        message: "Unable to save user",
        status: 400
    }));
    res.json({ message: "user created" });
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