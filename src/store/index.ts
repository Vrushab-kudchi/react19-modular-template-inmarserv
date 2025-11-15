import { create } from "zustand";
import useAuthSlice from "./slice/useAuthSlice";
import { createJSONStorage, persist, devtools } from "zustand/middleware";

export const useStore = create(
  devtools(
    persist(
      (...args: Parameters<typeof useAuthSlice>) => ({
        ...useAuthSlice(...args),
      }),
      {
        name: "app-storage",
        storage: createJSONStorage(() => localStorage),
        partialize: (state) => ({
          email: state.email,
          name: state.name,
          role: state.role,
          accessToken: state.accessToken,
        }),
      }
    )
  )
);
