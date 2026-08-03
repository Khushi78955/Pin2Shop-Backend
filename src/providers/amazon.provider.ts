import { Product } from "../models/product.model.js";
import { Provider } from "./provider.interface.js";

export class AmazonProvider implements Provider {
    async search(query: string): Promise<Product[]> {
        return [];
    }
}