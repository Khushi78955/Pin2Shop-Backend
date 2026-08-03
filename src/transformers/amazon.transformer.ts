import { Product } from "../models/product.model.js";

export function transformAmazonProducts(rawData: string): Product[] {
    console.log(rawData.substring(0, 500));
    return [];
}