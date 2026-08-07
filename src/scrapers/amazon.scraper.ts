import * as cheerio from "cheerio";
import { getPageHtml } from "../utils/playwright.js";


export interface AmazonRawProduct {
    title: string;
    brand: string | null;
    image: string;
    url: string;
    priceText: string;
    originalPriceText: string;
    ratingText: string;
    reviewText: string;
}


export async function scrapeAmazon(
    query: string
): Promise<AmazonRawProduct[]> {


    const searchUrl =
        `https://www.amazon.in/s?k=${encodeURIComponent(query)}`;


    console.log("Searching Amazon:", searchUrl);


    const html = await getPageHtml(searchUrl);


    console.log("AMAZON HTML LENGTH:", html.length);


    const $ = cheerio.load(html);


    const products: AmazonRawProduct[] = [];


    $(".s-result-item[data-component-type='s-search-result']")
        .each((_, element) => {

            const card = $(element);


            const title =
                card.find("h2 span").text().trim();


            const image =
                card.find("img.s-image").attr("src") || "";


            const url =
                card.find("a.a-link-normal.s-no-outline")
                    .first()
                    .attr("href") ||
                card.find("a[href*='/dp/']")
                    .first()
                    .attr("href") ||
                "";


            const priceText =
                card.find(".a-price-whole")
                .first()
                .text()
                .trim();


            const ratingText =
                card.find(".a-icon-star-small")
                .text()
                .trim();


            const reviewText =
                card.find(".a-size-base")
                .last()
                .text()
                .trim();



            if(title && image) {

                products.push({

                    title,

                    brand: null,

                    image,

                    url: url.startsWith("http")
                        ? url
                        : `https://www.amazon.in${url}`,

                    priceText,

                    originalPriceText: "",

                    ratingText,

                    reviewText
                });

            }

        });



    console.log(
        "EXTRACTED AMAZON PRODUCTS:",
        products.length
    );


    return products;
}