import { Request, Response } from "express";
import { prisma } from "../app";

export const postSignup = async (req: Request, res: Response) => {
    const user = await prisma.user.create(
        {
            data: {
                firstName: "Jorge",
                lastName: "Reyes",
                email: "jorge20080@hotmail.com",
                password: "1234"
            }
        }
    );
    const foundUsers = await prisma.user.findMany();
    res.json(foundUsers);
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