import { create } from "zustand"
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/v1/checkout",
  withCredentials: true,
});


interface productsCheckout {
  image?: string
  price: number
  name: string
  quantity: number
}

interface InitResponse {
    success?: boolean;
    message: string;
    products?: productsCheckout[]
    total: number,
    discount: number,
    subtotal: number
    checkoutId: string
}


type CheckoutStore = {
    loading: boolean;
    error: string | null;

    
    checkoutInit: (productIds: string[]) => Promise<InitResponse| undefined>;
    getCheckout: (checkoutId: string) => Promise<InitResponse | undefined>;
}


export const useCheckoutStore = create<CheckoutStore>((set) => ({
    
    loading: false,
    error: null,

    
    checkoutInit: async (productIds: string[]) => {
      try {
        set({ loading: true, error: null });

        const { data } = await api.post("/create", {
          products_id: productIds,
        });

        set({ loading: false });

        return data; // 👈 RETORNA O OBJETO TODO
      } catch (error: any) {
        set({
          error: error.response?.data?.message || error.message,
          loading: false,
        });

        return null;
      }
    },

    getCheckout: async (checkoutId: string) => {
    try {
      set({ loading: true, error: null });

      const { data } = await api.get(`/${checkoutId}`);

      set({ loading: false });

      return data;
    } catch (error: any) {
      set({
        loading: false,
        error: error.response?.data?.message || error.message,
      });

      return undefined;
    }
  },


}))