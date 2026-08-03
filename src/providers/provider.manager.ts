import { AmazonProvider } from "./amazon.provider.js";
import { Provider } from "./provider.interface.js";

export class ProviderManager {
    private providers: Provider[];
    constructor() {
        this.providers = [
            new AmazonProvider()
        ];
    }
    getProviders(): Provider[] {
        return this.providers.filter(
            (provider) => provider.enabled
        );
    }
}