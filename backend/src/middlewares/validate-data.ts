import { NextFunction, Request, Response } from "express";
import { ZodEffects, ZodSchema } from "zod";

export const validateData = (schema: ZodSchema<any, any> | ZodEffects<ZodSchema<any, any>>) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.safeParse(req.body);
        if (error) {
            res.status(404).json({ message: "Error Occurred", error })
            return;
        }
        next();
    }
}
