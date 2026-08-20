import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "./api";






type CreateCheckoutDirectData = {
    product_id: string,
    quantity: number
}

type CreateCheckoutCartData = {
    products_id: string[];
};

const fetchGetCheckout = async (checkoutId: string) => {
    const response = await api.get(`/checkout/${checkoutId}`)
    return response.data
}

const fetchCreateCheckoutDirect = async (data: CreateCheckoutDirectData) => {
    const response = await api.post("/checkout/direct", data);
    return response.data;
};

const fetchCreateCheckoutCart = async (data: CreateCheckoutCartData) => {
    const response = await api.post("/checkout/cart", data)
    return response.data
}

const fetchUpdateAddress = async (checkout_id: string, address_id: string) => {
    const response = await api.put("/checkout/address", { checkout_id, address_id })
    return response.data
}

export function useGetCheckout(id:string){
    
    return useQuery({
        queryKey: ["checkout"],
        queryFn: () => fetchGetCheckout(id)
    });
    
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

export function useUpdateAddress() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ checkout_id, address_id }: { checkout_id: string, address_id: string }) => fetchUpdateAddress(checkout_id, address_id),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["checkout"]
            });
        }
    });
}