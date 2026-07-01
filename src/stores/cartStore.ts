import { create } from "zustand";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/v1/cart",
  withCredentials: true,
});

interface CartItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
  image: string
  store: string 
}

interface CartStore {
  cart: CartItem[];
  selectedIds: string[];
  
  loading: boolean;
  error: string | null;


  toggleItem: (id: string) => void
  removeItem: (id: string) => void
  getCart: () => Promise<void>;
  addToCart: (productId: string, quantity?: number) => Promise<void>;
  removeFromCart: (productId: string) => Promise<void>;
  updateQuantity: (productId: string, quantity: number) => Promise<void>;
  
}



export const useCartStore = create<CartStore>((set, get) => ({
  cart: [],
  selectedIds:[],
  loading: false,
  error: null,
  


  toggleItem: (id) =>
        set((state) => ({
            selectedIds: state.selectedIds.includes(id)
            ? state.selectedIds.filter(i => i !== id)
            : [...state.selectedIds, id]
  })),

  removeItem: (id) =>{
      set((state) => ({
          selectedIds: state.selectedIds.filter(i => i !== id)
      }))
  },


  getCart: async () => {
    try {
      set({ loading: true, error: null });

      const {data} = await api.post("/list");
      
      set({
        
        cart: data.data.items,
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

       await api.post("/add", {
        product_id: productId,
        quantity,   
      });

      

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

      await api.delete(`/remove/${productId}`);

      await get().getCart();

      set({ loading: false });
    } catch (error:any) {
      set({
        error: error.response?.data?.message || error.message,
        loading: false,
      });
    }
  },

  updateQuantity: async (productId: string, quantity: number) => {
    const previousCart = get().cart;

    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      ),
      loading: true,
      error: null,
    }));

    try {
      await api.patch("/update", {
        product_id: productId,
        quantity,
      });

      set({ loading: false });
    } catch (error:any) {
      set({
        cart: previousCart,
        error: error.response?.data?.message || error.message,
        loading: false,
      });
    }
  },

}));