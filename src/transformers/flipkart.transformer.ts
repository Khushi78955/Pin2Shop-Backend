import { Product } from "../models/product.model.js";
import { FlipkartRawProduct } from "../scrapers/flipkart.scraper.js";

export function transformFlipkartProducts(
    products: FlipkartRawProduct[]
): Product[] {
    return products.map((product) => ({
        id: crypto.randomUUID(),
        title: product.title,
        brand: product.brand,
        price: Number(
            product.priceText.replace(/[^\d]/g, "")
        ) || 0,

        originalPrice: Number(
            product.originalPriceText.replace(/[^\d]/g, "")
        ) || 0,
        discount: null,
        currency: "INR",
        image: product.image,
        url: product.url.startsWith("http")
            ? product.url
            : `https://www.flipkart.com${product.url}`,
        provider: "flipkart",
        availableSizes: [],
        availableColors: [],
        rating: parseFloat(product.ratingText) || null,
        reviewCount: Number(product.reviewText.replace(/[^\d]/g, "")) || null,
        inStock: null,
    }));
}