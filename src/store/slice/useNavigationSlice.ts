import type { StateCreator } from "zustand";

export interface NavigationState {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  closeSidebar: () => void;
}

const useNavigationSlice: StateCreator<Navigation> = (set) => ({
  sidebarOpen: false,
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  closeSidebar: () => set({ sidebarOpen: false }),
});

export default useNavigationSlice;
