export type CardProductProps = {
    assessment: number;
    original_price: number;
    name: string; 
    id: string;
    code: string
    image: string;
    current_price?: number;
    store: string
}

export type ProductInformationProps = {
    rating: number;
    stock: number;
    brand: string;
    title: string;
    description: string;
    price: number;
    discountPercentage?: number;
}

export type CartItemProps = {
    thumbnail: string
    id: number
    title: string
    store: string
    price: number
    quantity: number
}