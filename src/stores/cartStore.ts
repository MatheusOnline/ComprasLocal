import { create } from "zustand";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/v1/cart",
  withCredentials: true,
});

interface CartItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

interface CartStore {
   cart: CartItem[];
  loading: boolean;
  error: string | null;

  getCart: () => Promise<void>;
  addToCart: (productId: string, quantity?: number) => Promise<void>;
}

export const useCartStore = create<CartStore>((set, get) => ({
  cart: [],
  loading: false,
  error: null,

  getCart: async () => {
    try {
      set({ loading: true, error: null });

      const { data } = await api.post("/list");

      set({
        cart: data,
        loading: false,
      });
    } catch (error:any) {
      set({
        error: error.response?.data?.message || error.message,
        loading: false,
      });
    }
  },

  addToCart: async (productId, quantity = 1) => {
    try {
      set({ loading: true, error: null });

      const response = await api.post("/add", {
        productId,
        quantity,
      });

      console.log(response)

      await get().getCart();

      set({ loading: false });
    } catch (error:any) {
      set({
        error: error.response?.data?.message || error.message,
        loading: false,
      });
    }
  },

  removeFromCart: async (productId: string) => {
    try {
      set({ loading: true, error: null });

      await api.delete(`/cart/${productId}`);

      await get().getCart();

      set({ loading: false });
    } catch (error:any) {
      set({
        error: error.response?.data?.message || error.message,
        loading: false,
      });
    }
  },

  clearCart: async () => {
    try {
      set({ loading: true, error: null });

      await api.delete("/cart");

      set({
        cart: [],
        loading: false,
      });
    } catch (error:any) {
      set({
        error: error.response?.data?.message || error.message,
        loading: false,
      });
    }
  },
}));