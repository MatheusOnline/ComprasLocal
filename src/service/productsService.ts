import { useQuery } from "@tanstack/react-query";
import { api } from "./api";


const fetchList = async (value: ListProps) => {
    const response = await api.get("/product/list", {
        params: value
    });
    return response.data;
};

const fetchGet = async (id: string) => {
    const response = await api.get(`/product/get/${id}`)
    console.log(response.data)
    return response.data
}


export function useList(value: ListProps) {
    return useQuery({
        queryKey: ["products", value],
        queryFn: () => fetchList(value)
    });
}

export function useGet(id: string) {
    return useQuery({
        queryKey: ["product", id],
        queryFn: () => fetchGet(id)
    });
}

type ListProps = {
    limit?: number
    page?: number
    search?: string
}