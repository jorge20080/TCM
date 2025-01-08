import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { ErrorResponse } from "../utils/error-response.js";

export const protectedRoute = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.cookie.split("=")[1];
        const userData = jwt.verify(token, process.env.SECRETTOKEN);
        req.body.userData = userData;
        next();
    } catch (e) {
        next(new ErrorResponse({ message: "invalid token", status: 404 }));
    }
}