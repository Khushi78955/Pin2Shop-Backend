import { Product } from "../models/product.model.js";
import { Provider } from "./provider.interface.js";

export class NykaaProvider implements Provider {
    readonly name = "nykaa";
    readonly enabled = true;
    readonly strategy = "hybrid";
    async search(query: string): Promise<Product[]> {
        return [];
    }
}