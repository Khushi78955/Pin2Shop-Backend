import { Product } from "../models/product.model.js";

export interface Provider {
    readonly name: string;
    readonly enabled: boolean;
    readonly strategy: "api" | "scraping" | "hybrid";
    search(query: string): Promise<Product[]>;
}