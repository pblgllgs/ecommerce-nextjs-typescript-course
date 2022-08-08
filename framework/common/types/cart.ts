import { ProductOption, ProductVariant } from "./product";

export interface Cart {
    id: string;
    createdAt: string;
    currency: {
        code: string;
    };
    taxesIncluded: boolean;
    lineItemsSubtotalPrice: number;
    totalPrice: number;
    lineItems: LineItem[];
    discounts: Discount[];
}

export interface LineItem {
    id: string;
    variantId: string;
    productId: string;
    name: string;
    path: string;
    quantity: number;
    discounts: Discount[];
    options?: ProductOption[];
    variant: Partial<ProductVariant>
}

export interface Discount {
    value: number
}