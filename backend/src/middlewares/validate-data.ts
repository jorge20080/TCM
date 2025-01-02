import { NextFunction, Request, Response } from "express";
import { ZodEffects, ZodError, ZodSchema } from "zod";
import { ErrorResponse } from "../utils/error-response.js";

export const validateData = (schema: ZodSchema<any, any> | ZodEffects<ZodSchema<any, any>>) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.safeParse(req.body);
        if (error) {
            const errorObj = convertErrorsToObj(error);
            next(new ErrorResponse({ status: 404, message: "Data Validation Error", errors: error.errors, errorObj }))
            return;
        }
        next();
    }
}

const convertErrorsToObj = (error: ZodError) => {
    let data: { [key: string]: string } = {};
    error.errors.forEach(err => {
        data[err.path[0]] = err.message;
    })
    return data;
}
