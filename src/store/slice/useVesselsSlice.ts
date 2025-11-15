import type { StateCreator } from "zustand";

interface Vessel {
  _id: string;
  clientId: string;
  modulesId: string[];
  name: string;
  imoNumber: string;
  mmsiNumber: string;
  callSign: string;
  flagState: string;
  vesselType: string;
  grossTonnage: number;
  deadweight: number;
  length: number;
  width: number;
  draft: number;
  yearBuilt: number;
  classificationSociety: string;
  owner: string;
  operator: string;
  clientName: string;
  status: string;
  portOfRegistry: string;
  homePort: string;
  currentLocation: string;
  createdBy: string;
  email: string;
  telephone: string;
  sat_c: string;
  code: string;
  createdAt: Date;
  updatedAt: Date;
  certificateNumber: string;
  expiryDate: Date;
}

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
