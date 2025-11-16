import { create, type StateCreator } from "zustand";
import useAuthSlice from "./slice/useAuthSlice";
import { createJSONStorage, persist, devtools } from "zustand/middleware";
import useVesselsSlice from "./slice/useVesselsSlice";
import type { AuthSlice } from "./slice/useAuthSlice";
import type { VesselsSlice } from "./slice/useVesselsSlice";
import type { NavigationState } from "./slice/useNavigationSlice";
import useNavigationSlice from "./slice/useNavigationSlice";

// Combined state type
export type StoreState = AuthSlice & VesselsSlice & NavigationState;

// Combined state creator with proper typing
const useStoreCreator: StateCreator<StoreState> = (...args) => ({
  ...useAuthSlice(...args),
  ...useVesselsSlice(...args),
  ...useNavigationSlice(...args),
});

export const useStore = create<StoreState>()(
  devtools(
    persist(useStoreCreator, {
      name: "app-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        email: state.email,
        name: state.name,
        role: state.role,
        modules: state.modules,
        selectedModules: state.selectedModules,
        sidebarOpen: state.sidebarOpen,
      }),
    })
  )
);
