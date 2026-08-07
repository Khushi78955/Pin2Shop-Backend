import * as cheerio from "cheerio";

const html = `
<div class="product">
    <h2>Nike Hoodie</h2>
    <span class="brand">Nike</span>
    <span class="price">₹1999</span>
</div>

<div class="product">
    <h2>Adidas Shoes</h2>
    <span class="brand">Adidas</span>
    <span class="price">₹3499</span>
</div>

<div class="product">
    <h2>Puma Jacket</h2>
    <span class="brand">Puma</span>
    <span class="price">₹2799</span>
</div>
`;

const $ = cheerio.load(html);
$(".product").each((index, element) => {
    const title = $(element).find("h2").text();
    const brand = $(element).find(".brand").text();
    const price = $(element).find(".price").text();
    console.log(index);
    console.log(title);
    console.log(brand);
    console.log(price);
    console.log("----------------");
});