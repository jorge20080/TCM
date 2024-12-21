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

export const putVerifyEmail = async (req: Request, res: Response, next: NextFunction) => {
    const { email, token } = req.query;
    if (!email || !token) {
        return next(new ErrorResponse({ message: "Invalid Token or Email", status: 404 }))
    }
    const { error, sucess } = await User.verifyEmail(email.toString(), token.toString());
    if (error) return next(error);
    res.json({ message: "Email has been verified", sucess });
}

export const putGenerateResetToken = (req: Request, res: Response) => {
    res.json();
}

export const putResetPassword = (req: Request, res: Response) => {
    res.json();
}