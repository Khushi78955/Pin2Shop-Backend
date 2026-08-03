export async function get(url: string): Promise<string> {
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "User-Agent": "Mozilla/5.0"
        }
    });
    if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
    }
    return await response.text();
}