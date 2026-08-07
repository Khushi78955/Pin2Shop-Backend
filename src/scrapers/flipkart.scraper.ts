import * as cheerio from "cheerio";
import { getPageHtml } from "../utils/playwright.js";

export interface FlipkartRawProduct {
    title: string;
    brand: string | null;
    image: string;
    url: string;
    priceText: string;
    originalPriceText: string;
    ratingText: string;
    reviewText: string;
}


export async function scrapeFlipkart(
    query: string
): Promise<FlipkartRawProduct[]> {

    const searchUrl =
        `https://www.flipkart.com/search?q=${encodeURIComponent(query)}`;

    console.log("Searching Flipkart:", searchUrl);


    const html = await getPageHtml(searchUrl);


    console.log("HTML LENGTH:", html.length);


    const $ = cheerio.load(html);


    console.log("TITLE:", $("title").text());


    console.log(
        "DATA-ID COUNT:",
        $("div[data-id]").length
    );


    console.log(
        "PRODUCT LINK COUNT:",
        $("a").length
    );


    console.log(
        "HAS INITIAL STATE:",
        html.includes("__INITIAL_STATE__")
    );


    const products: FlipkartRawProduct[] = [];

    $("div[data-id]").each((_, element) => {
        const card = $(element);


        const title =
            card.find("a").attr("title") ||
            card.find("div").first().text().trim();


        const image =
            card.find("img").attr("src") || "";


        const url =
            card.find("a").first().attr("href") || "";


        const cardText = card.text();

        const priceText =
            cardText.match(/₹[\d,]+/)?.[0] || "";

        if (title && image) {
            products.push({
                title,
                brand: null,
                image,
                url: url.includes("flipkart.com")
                    ? url
                    : `https://www.flipkart.com${url}`,
                priceText,
                originalPriceText: "",
                ratingText: "",
                reviewText: ""
            });
        }
    });


    console.log(
        "EXTRACTED FLIPKART PRODUCTS:",
        products.length
    );


    return products;
}