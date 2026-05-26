export type CardProductProps = {
    ratting: number;
    price: number;
    title: string;
    store: string;
    imgSrc: string;    
    id: string;
    category?: string;
    discount?: number;
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