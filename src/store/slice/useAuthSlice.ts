import type { StateCreator } from "zustand";

interface AuthState {
  email: string | null;
  name: string | null;
  role: string | null;
}

// Define the full slice type including actions (setAuth is required, not optional)
export interface AuthSlice {
  email: string | null;
  name: string | null;
  role: string | null;
  accessToken: string | null;
  setAuth: (data: AuthState) => void;
}

const useAuthSlice: StateCreator<AuthSlice> = (set) => ({
  email: null,
  name: null,
  role: null,
  accessToken: null,
  setAuth: ({ email, name, role }: AuthState) =>
    set({
      email,
      name,
      role,
    }),
});

export default useAuthSlice;
