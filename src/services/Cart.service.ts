import { api } from "./api";
import type { ApiResponse } from "./types";


export const CartService = {
    async AddCart(ProductId: number) {
        //const response = await api.post<ApiResponse<null>>("cart",{productId: ProductId})
        //return response
        return {
            message: "Adicionado",
            success: true,
            data: null,
            error: null
        }
    
    }
}

