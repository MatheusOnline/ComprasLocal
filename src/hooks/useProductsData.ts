import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const API_URL = "http://localhost:3000/v1/product"

const fetchProduct = async()  => {
    const response = await axios.get(`${API_URL}/list`)
    console.log(response.data)
    return response.data.datas.Products
}



export function useProductData(){
    const query = useQuery({
        queryFn: fetchProduct,
        queryKey: ['products'],
    })

    return {
        ...query,
        data: query.data
    }
}

// Buscar produto por ID
const fetchProductById = async (id: number) => {
    const response = await axios.get(`${API_URL}/products/${id}`);
    return response.data;
};

// Hook produto específico
export function useProduct(id: number) {
    const query = useQuery({
        queryKey: ["product", id],
        queryFn: () => fetchProductById(id)
    });
    return {
        ...query,
        data: query.data
    }
}