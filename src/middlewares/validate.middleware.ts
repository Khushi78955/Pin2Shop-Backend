import { ZodType } from "zod";
import { Request, Response, NextFunction } from "express";

export function validate(schema: ZodType) {
    return (request: Request, response: Response, next: NextFunction) => {
        const result = schema.safeParse(request.body);
        if (!result.success) {
            return response.status(400).json({
                success: false,
                errors: result.error.flatten()
            })
        }
        request.body = result.data
        return next();
    }
}