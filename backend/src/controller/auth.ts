import { NextFunction, Request, Response } from "express";
import { User } from "../services/user";
import { ErrorResponse } from "../utils/error-response";
import crypto from 'crypto';

export const postSignup = async (req: Request, res: Response, next: NextFunction) => {
    const { givenName, lastName, email, password } = req.body;
    const user = new User({ givenName, lastName, email, password });
    const { error, success } = await user.save();
    if (error) return next(error);
    res.json({ message: "user created", success });
}

export const postLogin = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    const { error, token } = await User.login(email, password);
    if (error) return next(error);
    res.json({ message: "User logged", token });
}

export const putVerifyEmail = async (req: Request, res: Response, next: NextFunction) => {
    const { email, token } = req.query;
    if (!email || !token) {
        return next(new ErrorResponse({ message: "Invalid Token or Email", status: 404 }))
    }
    const { error, success } = await User.verifyEmail(email.toString(), token.toString());
    if (error) return next(error);
    res.json({ message: "Email has been verified", success });
}

export const putGenerateResetToken = async (req: Request, res: Response, next: NextFunction) => {
    const user = await User.findById("61e0da62-6944-4404-a802-9cf5a42bb9f8");
    let message = "Token sucessfully generated";
    if (!user.resetToken) user.resetToken = crypto.randomUUID();
    else message = "Token already generated";
    const { error, success } = await user.save();
    if (error) {
        return next(new ErrorResponse({ message: "Error generating token", status: 404 }))
    }
    res.json({ token: user.resetToken, message, success });
}

export const putResetPassword = (req: Request, res: Response) => {
    res.json();
}