export interface ProductImage {
    url: string;
    alt?: string;
}

export interface ProductPrice {
    value: number;
    currencyCode: "USD" | "EUR" | String;
}

export interface Product {
    id: string;
    name: string;
    description: string;
    slug: string;
    path: string;
    images: ProductImage[];
    price: ProductPrice
}