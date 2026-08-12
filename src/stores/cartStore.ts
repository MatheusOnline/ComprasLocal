import { create } from "zustand";

interface CartStore {
  selectedIds: string[];
  



  toggleItem: (id: string) => void
  removeToggleItem: (id: string) => void
}



export const useCartStore = create<CartStore>((set) => ({
  selectedIds:[],
  


  toggleItem: (id) =>
        set((state) => ({
            selectedIds: state.selectedIds.includes(id)
            ? state.selectedIds.filter(i => i !== id)
            : [...state.selectedIds, id]
  })),

  removeToggleItem: (id) =>{
      set((state) => ({
          selectedIds: state.selectedIds.filter(i => i !== id)
      }))
  },

}));