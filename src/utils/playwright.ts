import { getBrowser } from "../browser/browser.js";

export async function getPageHtml(url: string): Promise<string> {
    const browser = await getBrowser();

    const page = await browser.newPage({
        userAgent:
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
    });

    await page.goto(url, {
        waitUntil: "domcontentloaded",
        timeout: 60000,
    });

    await page.waitForLoadState("networkidle");

    const html = await page.content();

    await page.close();

    return html;
}