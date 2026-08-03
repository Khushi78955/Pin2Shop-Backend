import { Product } from "../models/product.model.js";
import { Provider } from "./provider.interface.js";

export class NewmeProvider implements Provider {
    readonly name = "newme";
    readonly enabled = true;
    readonly strategy = "scraping";
    async search(query: string): Promise<Product[]> {
        return [];
    }
}