import { AmazonProvider } from "../providers/amazon.provider.js";
const amazonProvider = new AmazonProvider();

export async function searchProducts(query: string) {
    const amazonResults = await amazonProvider.search(query);
    return {
        success: true,
        query,
        providers: {
            amazon: amazonResults
        }
    }
}