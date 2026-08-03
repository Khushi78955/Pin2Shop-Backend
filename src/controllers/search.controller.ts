import { Request, Response } from "express";
import { searchProducts } from "../services/search.service.js";

export async function search(request: Request, response: Response) {
    const { query } = request.body;
    const result = await searchProducts(query);
    response.json(result);
}