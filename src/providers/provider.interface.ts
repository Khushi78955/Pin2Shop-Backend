import { Product } from "../models/product.model.js";

export interface Provider {
    search(query: string): Promise<Product[]>;
}