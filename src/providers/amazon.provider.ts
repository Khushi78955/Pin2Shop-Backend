import { Product } from "../models/product.model.js";
import { get } from "../utils/http.js";
import { buildAmazonSearchUrl } from "../utils/url.js";
import { Provider } from "./provider.interface.js";
import { transformAmazonProducts } from "../transformers/amazon.transformer.js";
export class AmazonProvider implements Provider {
    readonly name = "amazon";
    readonly enabled = true;
    readonly strategy = "hybrid";
    async search(query: string): Promise<Product[]> {
        const url = buildAmazonSearchUrl(query);
        const rawData = await get(url);
        const products = transformAmazonProducts(rawData);
        return products;
    }
}