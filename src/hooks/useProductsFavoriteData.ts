import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const API_URL = "https://dummyjson.com"

const fetchProductFavorite = async()  => {
    const response = await axios.get(`${API_URL}/products?limit=10&skip=40`)
    return response?.data.products
}


export function useProductFavoriteData(){
    const query = useQuery({
        queryFn: fetchProductFavorite,
        queryKey: ['favorite'],
    })

    return {
        ...query,
        data: query.data
    }
}
