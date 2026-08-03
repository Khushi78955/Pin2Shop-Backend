import { Product } from "../models/product.model.js";
import { Provider } from "./provider.interface.js";

export class MeeshoProvider implements Provider {
    readonly name = "meesho";
    readonly enabled = true;
    readonly strategy = "scraping";
    async search(query: string): Promise<Product[]> {
        return [];
    }
}