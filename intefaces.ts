export interface state {
    cart: CartItem[]
}
export interface CartItem {
    category: string;
    category_id: number;
    date_on_sale_from: null | string;
    date_on_sale_from_jalali: null | string;
    date_on_sale_to: null | string;
    date_on_sale_to_jalali: null | string;
    description: string;
    id: number;
    images: [];
    is_sale: boolean;
    name: number;
    price: number;
    primary_image: string;
    quantity: number;
    sale_price: number;
    slug: string;
    status: string;
    status_value: number;
    qty: number
}