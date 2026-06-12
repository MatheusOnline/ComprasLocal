import { create } from "zustand";
import axios from "axios";

type User = {
  name: string;
  email: string;
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
      const res = await axios.get("http://localhost:3000/me", {
        withCredentials: true,
      });

      set({ user: res.data.user, loading: false });
    } catch {
      set({ user: null, loading: false });
    }
  },
}));