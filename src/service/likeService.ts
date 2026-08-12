import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "./api";





const fetchGet = async () => {
    const response = await api.get("/like");
    return response.data;
};

const fetchToggle = async (product_id: string) => {
    const response = await api.post("/like/toggle",{
        product_id
    })
    return response.data
}



export function useGetLikes() {
    return useQuery({
        queryKey: ["like"],
        queryFn: () => fetchGet()
    });
}

export function useLikedProduct() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: fetchToggle,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["like"],
            });
            queryClient.invalidateQueries({
                queryKey: ["products"],
            });
            queryClient.invalidateQueries({
                queryKey: ["product"],
            });

        },
    });
}
