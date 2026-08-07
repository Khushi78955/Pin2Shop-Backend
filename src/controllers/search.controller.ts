import { NextFunction, Request, Response } from "express";
import { searchProducts } from "../services/search.service.js";

export async function search(request: Request, response: Response, next: NextFunction) {
    try {
        const { query } = request.body;
        const result = await searchProducts(query);
        return response.status(200).json(result);
    } catch (error) {
        next(error);
    }
}