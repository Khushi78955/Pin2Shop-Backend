import { Product } from "../models/product.model.js";
import { Provider } from "./provider.interface.js";

export class AjioProvider implements Provider {
    readonly name = "ajio";
    readonly enabled = true;
    readonly strategy = "scraping";
    async search(query: string): Promise<Product[]> {
        return [];
    }
}