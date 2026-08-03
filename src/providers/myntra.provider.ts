import { Product } from "../models/product.model.js";
import { Provider } from "./provider.interface.js";

export class MyntraProvider implements Provider {
    readonly name = "myntra";
    readonly enabled = true;
    readonly strategy = "scraping";
    async search(query: string): Promise<Product[]> {
        return [];
    }
}