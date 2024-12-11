import { Request, Response } from "express";
import { User } from "../models/user";

export const postSignup = (req: Request, res: Response) => {
    User.getAll();
    res.json();
}
export const postLogin = (req: Request, res: Response) => {
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