export interface Provider {
    search(query: string): Promise<unknown>;
}