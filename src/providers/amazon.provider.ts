import { Provider } from "./provider.interface.js";

export class AmazonProvider implements Provider{
    async search(query: string): Promise<unknown> {
        return []
    }
}