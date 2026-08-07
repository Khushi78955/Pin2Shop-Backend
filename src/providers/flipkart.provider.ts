import { Product } from "../models/product.model.js";
import { scrapeFlipkart } from "../scrapers/flipkart.scraper.js";
import { transformFlipkartProducts } from "../transformers/flipkart.transformer.js";
import { Provider } from "./provider.interface.js";

export class FlipkartProvider implements Provider {
    readonly name = "flipkart";
    readonly enabled = true;
    readonly strategy = "scraping";

    async search(query: string): Promise<Product[]> {
        const rawProducts = await scrapeFlipkart(query);
        console.log("Flipkart scraper returned:", rawProducts.length);
        const products = transformFlipkartProducts(rawProducts);
        console.log("Flipkart transformer returned:", products.length);
        return products;
    }
}