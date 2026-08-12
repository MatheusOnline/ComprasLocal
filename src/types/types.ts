export type CardProductProps = {
    assessment: number;
    original_price: number;
    title: string; 
    id: string;
    code: string
    image: string;
    current_price?: number;
    store: string
    liked?: boolean
}

export type ProductInformationProps = {
    id: string
    assessment: number;
    stock: number;
    code: string;
    title: string;
    description: string;
    original_price: string;
    category: string
}

export type CartItemProps = {
    image: string
    id: string
    title: string
    store: string
    price: number
    quantity: number
}