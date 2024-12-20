import { Request, Response } from "express";
import { ErrorRequest } from "../utils/ErrorRequest";

export const errorHandler = (error: ErrorRequest, req: Request, res: Response, next: NewableFunction) => {
    res.status(error.status).json({ error });
}