import { create } from "zustand";

type Item = {
  id: number
}

type Cart = {
  item: Item[];
  addItem: (id:number) => void;
}


export const useCart = create<Cart>((set) =>({
  item: [],
  addItem: (id) => set((state) => ({
    item: [...state.item, { id }],
  })),

}))