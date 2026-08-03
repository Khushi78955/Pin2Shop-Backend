export function buildAmazonSearchUrl(query: string): string {
    const encodedQuery = encodeURIComponent(query);
    return `https://www.amazon.in/s?k=${encodedQuery}`;
}