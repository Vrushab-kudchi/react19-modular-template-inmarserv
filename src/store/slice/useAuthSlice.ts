import type { StateCreator } from "zustand";

interface AuthState {
  email: string | null;
  name: string | null;
  role: string | null;
  modules: Module[] | null;
}

interface Module {
  _id: string;
  keyword: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

// Define the full slice type including actions (setAuth is required, not optional)
export interface AuthSlice {
  email: string | null;
  name: string | null;
  role: string | null;
  setAuth: (data: AuthState) => void;
  modules: Module[] | null;
  selectedModules: string | null;
  setModules: (keywords: string | null) => void;
}

const useAuthSlice: StateCreator<AuthSlice> = (set) => ({
  email: null,
  name: null,
  role: null,
  modules: null,
  selectedModules: null,
  setAuth: ({ email, name, role, modules }: AuthState) =>
    set({
      email,
      name,
      role,
      modules,
    }),
  setModules: (keywords: string | null) =>
    set({
      selectedModules: keywords,
    }),
});

export default useAuthSlice;
