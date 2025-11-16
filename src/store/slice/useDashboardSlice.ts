import type { StateCreator } from "zustand";

export interface DashboardState {
  searchTerm: string | "";
  filterStatus: string | "";
  filterType: string | "";
  totalVessels: number | 0;
  setSearchTerm: (searchTerm: string) => void;
  setFilterStatus: (filterStatus: string) => void;
  setFilterType: (filterType: string) => void;
  setTotalVessels: (totalVessels: number) => void;
}

const useDashboardSlice: StateCreator<DashboardState> = (set) => ({
  searchTerm: "",
  filterStatus: "all",
  filterType: "all",
  totalVessels: 0,
  setSearchTerm: (searchTerm: string) => set({ searchTerm }),
  setFilterStatus: (filterStatus: string) => set({ filterStatus }),
  setFilterType: (filterType: string) => set({ filterType }),
  setTotalVessels: (totalVessels: number) => set({ totalVessels }),
});

export default useDashboardSlice;
