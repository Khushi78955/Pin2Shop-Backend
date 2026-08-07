import { ProviderManager } from "../providers/provider.manager.js";
import { Product } from "../models/product.model.js";

const providerManager = new ProviderManager();

export async function searchProducts(query: string): Promise<{
    success: boolean;
    query: string;
    products: Product[];
}> {
    const providers = providerManager.getProviders()

    const results = await Promise.allSettled(
        providers.map((provider) => provider.search(query))
    )

    const products: Product[] = []
    const seen = new Set<string>();

    results.forEach((result, index) => {
        const provider = providers[index]

        if (result.status === "fulfilled") {
            console.log(`${provider.constructor.name} returned ${result.value.length} products`)
            result.value.forEach((product) => {
                const key = product.title.toLowerCase().trim();

                if (!seen.has(key)) {
                    seen.add(key);
                    products.push(product);
                }
            });
        } else {
            console.log(`${provider.constructor.name} FAILED`)
            console.error(result.reason);
        }
    })

    const filteredProducts = products.filter((product) => {
        const text = `${product.title} ${product.brand}`.toLowerCase();

        return query
            .toLowerCase()
            .split(" ")
            .every(word => text.includes(word));
    });


    return {
        success: true,
        query,
        products: filteredProducts.slice(0,20),
    }
}