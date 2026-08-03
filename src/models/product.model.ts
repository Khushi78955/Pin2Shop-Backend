export interface Product {
    id: string;
    title: string;
    brand: string | null;
    price: number | null;
    originalPrice: number | null;
    discount: string | null;
    currency: "INR";
    image: string;
    url: string;
    provider: "amazon" | "flipkart" | "myntra" | "nykaa" | "ajio" | "newme" | "meesho";
    availableSizes: string[];
    availableColors: string[];
    rating: number | null;
    reviewCount: number | null;
    inStock: boolean | null;
}