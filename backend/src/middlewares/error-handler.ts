import { Request, Response } from "express";
import { ErrorResponse } from "../utils/error-response.js";

export const errorHandler = (error: ErrorResponse, req: Request, res: Response, next: NewableFunction) => {
    res.status(error.status).json({ error: error.errorObj || error.message });
}