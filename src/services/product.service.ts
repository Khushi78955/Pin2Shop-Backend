import { scrapeAmazon } from "../scrapers/amazon.scraper.js";
import { scrapeFlipkart } from "../scrapers/flipkart.scraper.js";

import { transformAmazonProducts } from "../transformers/amazon.transformer.js";
import { transformFlipkartProducts } from "../transformers/flipkart.transformer.js";

import { Product } from "../models/product.model.js";


export async function searchProducts(
    query: string
): Promise<Product[]> {


    const [
        amazonRaw,
        flipkartRaw
    ] = await Promise.all([
        scrapeAmazon(query),
        scrapeFlipkart(query)
    ]);


    const amazonProducts =
        transformAmazonProducts(amazonRaw);


    const flipkartProducts =
        transformFlipkartProducts(flipkartRaw);



    return [
        ...amazonProducts,
        ...flipkartProducts
    ];
}