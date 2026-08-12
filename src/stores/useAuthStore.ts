import { create } from "zustand";
import { api } from "../service/api";

type User = {
  name: string;
  email: string;
  cpf: string
};

type AuthStore = {
  user: User | null;
  loading: boolean;

  fetchUser: () => Promise<void>;
  setUser: (user: User | null) => void;
  logout: () => void;
};

export const useAuth = create<AuthStore>((set) => ({
  user: null,
  loading: true,

  setUser: (user) => set({ user }),

  logout: () => set({ user: null }),

  fetchUser: async () => {
    try {
      const res = await api.get("/v1/auth/me", {
        withCredentials: true,
      });

      set({ user: res.data.user, loading: false });
    } catch {
      set({ user: null, loading: false });
    }
  },
}));