import { Provider } from "./provider.interface.js";
import { AmazonProvider } from "./amazon.provider.js";
import { FlipkartProvider } from "./flipkart.provider.js";
import { MyntraProvider } from "./myntra.provider.js";
import { NykaaProvider } from "./nykaa.provider.js";
import { AjioProvider } from "./ajio.provider.js";
import { NewmeProvider } from "./newme.provider.js";
import { MeeshoProvider } from "./meesho.provider.js";
export class ProviderManager {
    private providers: Provider[];
    constructor() {
        this.providers = [
            new AmazonProvider(),
            new FlipkartProvider(),
            new MyntraProvider(),
            new NykaaProvider(),
            new AjioProvider(),
            new NewmeProvider(),
            new MeeshoProvider()
        ];
    }
    getProviders(): Provider[] {
        return this.providers.filter(
            (provider) => provider.enabled
        );
    }
}