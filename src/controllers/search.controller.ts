import { Request, Response } from "express";

export function searchProducts(request: Request, response: Response) {
    response.json({
        message: "Search endpoint working"
    });
}