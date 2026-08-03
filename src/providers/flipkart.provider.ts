import { Product } from "../models/product.model.js";
import { Provider } from "./provider.interface.js";

export class FlipkartProvider implements Provider {
    readonly name = "flipkart";
    readonly enabled = true;
    readonly strategy = "scraping";
    async search(query: string): Promise<Product[]> {
        return [];
    }
}