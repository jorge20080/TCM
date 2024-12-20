import { NextFunction, Request, Response } from "express";
import { ZodEffects, ZodSchema } from "zod";
import { ErrorRequest } from "../utils/ErrorRequest";

export const validateData = (schema: ZodSchema<any, any> | ZodEffects<ZodSchema<any, any>>) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.safeParse(req.body);
        if (error) {
            next(new ErrorRequest({ status: 404, message: "Data Validation Error", errors: error.errors }))
            return;
        }
        next();
    }
}
