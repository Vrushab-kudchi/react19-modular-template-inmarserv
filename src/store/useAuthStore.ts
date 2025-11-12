import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  setUser: (user: string | null) => set({ user }),
}));
