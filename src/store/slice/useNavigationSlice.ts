import type { StateCreator } from "zustand";

export interface NavigationState {
  sidebarOpen: boolean;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  toggleSidebar: () => void;
  closeSidebar: () => void;
}

const useNavigationSlice: StateCreator<NavigationState> = (set) => ({
  sidebarOpen: true, // Default to open on desktop for better UX
  isLoading: false,
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  closeSidebar: () => set({ sidebarOpen: false }),
});

export default useNavigationSlice;
