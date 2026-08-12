
import { useMutation } from "@tanstack/react-query";
import { api } from "./api";






type CreateCheckoutDirectData = {
    product_id: string,
    quantity: number
}

type CreateCheckoutCartData = {
    products_id: string[];
};

const fetchCreateCheckoutDirect = async (data: CreateCheckoutDirectData) => {
    const response = await api.post("/checkout/direct", data);
    return response.data;
};

const fetchCreateCheckoutCart = async (data: CreateCheckoutCartData) => {
    const response = await api.post("/checkout/cart", data)
    return response.data
}


export function useCreateCheckoutDirect() {
    return useMutation({
        mutationFn: fetchCreateCheckoutDirect,
    });
}

export function useCreateCheckoutCart() {
    return useMutation({
        mutationFn: fetchCreateCheckoutCart,
    });
}