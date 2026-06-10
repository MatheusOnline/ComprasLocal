import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const API_URL = "https://dummyjson.com"

const fetchCart = async()  => {
    const response = await axios.get(`${API_URL}/carts/3`)
    return response?.data
}



export function useCartData(){
    const query = useQuery({
        queryFn: fetchCart,
        queryKey: ['cart'],
    })

    return {
        ...query,
        data: query.data
    }
}

