import { ProviderManager } from "../providers/provider.manager.js";
import { Product } from "../models/product.model.js";

const providerManager = new ProviderManager();

export async function searchProducts(query: string) {
    const providers = providerManager.getProviders();
    const results = await Promise.allSettled(
        providers.map((provider) => provider.search(query))
    );
    const products: Product[] = [];
    for (const result of results) {
        if (result.status === "fulfilled") {
            products.push(...result.value);
        } else {
            console.error(result.reason);
        }
    }
    return {
        success: true,
        query,
        products
    }
}