import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_URL = "https://dummyjson.com";

const fetchProductSearch = async (value: string) => {
    const response = await axios.get(
        `${API_URL}/products/search?q=${value}`
    );

    return response.data.products;
};

export function useProductSearch(value: string) {
    const query = useQuery({
        queryKey: ["search", value],
        queryFn: () => fetchProductSearch(value),
        enabled: !!value // só executa se existir valor
    });

    return {
        ...query,
        data: query.data ?? []
    };
}