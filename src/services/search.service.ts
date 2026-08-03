import { ProviderManager } from "../providers/provider.manager.js";
import { Product } from "../models/product.model.js";

const providerManager = new ProviderManager();

export async function searchProducts(query: string) {
    const providers = providerManager.getProviders();
    const providerResults = await Promise.all(
        providers.map((provider) => provider.search(query))
    );
    const products: Product[] = providerResults.flat();
    return {
        success: true,
        query,
        products
    }
}