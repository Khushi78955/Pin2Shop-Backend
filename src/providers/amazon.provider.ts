import { Product } from "../models/product.model.js";
import { scrapeAmazon } from "../scrapers/amazon.scraper.js";
import { Provider } from "./provider.interface.js";
import { transformAmazonProducts } from "../transformers/amazon.transformer.js";

export class AmazonProvider implements Provider {
    readonly name = "amazon";
    readonly enabled = true;
    readonly strategy = "hybrid";

    async search(query: string): Promise<Product[]> {
        const rawProducts = await scrapeAmazon(query);
        const products = transformAmazonProducts(rawProducts);
        console.log(
            "AmazonProvider returned:",
            products.length
        );
        return products;
    }
}