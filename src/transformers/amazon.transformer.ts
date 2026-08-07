import { Product } from "../models/product.model.js";
import { AmazonRawProduct } from "../scrapers/amazon.scraper.js";


export function transformAmazonProducts(
    products: AmazonRawProduct[]
): Product[] {

    return products.map((product) => ({
        id: crypto.randomUUID(),

        title: product.title,

        brand: product.brand,

        price:
            Number(
                product.priceText.replace(/[^\d]/g, "")
            ) || 0,

        originalPrice:
            Number(
                product.originalPriceText.replace(/[^\d]/g, "")
            ) || 0,

        rating:
            parseFloat(product.ratingText) || null,

        reviewCount:
            Number(
                product.reviewText.replace(/[^\d]/g, "")
            ) || null,

        provider: "amazon",

        discount: null,

        currency: "INR",

        image: product.image,

        url: product.url,

        availableSizes: [],

        availableColors: [],

        inStock: null,
    }));
}