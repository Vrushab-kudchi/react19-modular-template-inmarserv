import type { StateCreator } from "zustand";
import type { Vessel } from "../../app/features/admin-dashboard/types";

interface VesselState {
  vessels: Vessel[];
  setVessels: (vessels: Vessel[]) => void;
}
// Define the full slice type including actions (setAuth is required, not optional)
export interface VesselsSlice {
  vessels: Vessel[];
  setVessels: (vessels: Vessel[]) => void;
}

const useVesselsSlice: StateCreator<VesselState> = (set) => ({
  vessels: [],
  setVessels: (vessels: Vessel[]) => set({ vessels }),
});

export default useVesselsSlice;
