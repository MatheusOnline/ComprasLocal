import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "./api";






const fetchGet = async () => {
    const response = await api.get("/cart");
    return response.data;
};

const fetchAdd = async (product_id: string) => {
    const response = await api.post("/cart",{
        product_id
    })
    return response.data
}

const fetchRemove = async(product_id: string) => {
    const response = await api.delete(`/cart/${product_id}`)
    return response.data
}

const fetchIncrease = async (product_id: string) => {
    const response = await api.patch(`/cart/${product_id}/increase`)
    return response.data
}

const fetchDecrease = async (product_id: string) => {
    const response = await api.patch(`/cart/${product_id}/decrease`)
    return response.data
}

export function useGetCart() {
    return useQuery({
        queryKey: ["cart"],
        queryFn: () => fetchGet()
    });
}

export function useAddItemToCart() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: fetchAdd,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["cart"],
            });
        },
    });
}

export function useRemoveItemToCart(){
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: fetchRemove,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["cart"]
            })
        }
    })
}

export function useIncreaseItemToCart(){
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: fetchIncrease,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["cart"]
            })
        }
    })
}

export function useDecreaseItemToCart(){
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: fetchDecrease,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["cart"]
            })
        }
    })
}