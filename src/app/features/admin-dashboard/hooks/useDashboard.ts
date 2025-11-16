import { useStore } from "../../../../store";
import { useEffect, useMemo, useRef } from "react";
import { dashboardService } from "../services/dashboardService";

const useDashboard = () => {
  const setVessels = useStore((state) => state.setVessels);
  const vessels = useStore((state) => state.vessels);
  const setSearchTerm = useStore((state) => state.setSearchTerm);
  const setFilterStatus = useStore((state) => state.setFilterStatus);
  const setFilterType = useStore((state) => state.setFilterType);
  const setTotalVessels = useStore((state) => state.setTotalVessels);
  const searchTerm = useStore((state) => state.searchTerm);
  const filterStatus = useStore((state) => state.filterStatus);
  const filterType = useStore((state) => state.filterType);
  const totalVessels = useStore((state) => state.totalVessels);
  const hasFetched = useRef(false);

  useEffect(() => {
    // Prevent multiple calls even if component re-renders
    if (hasFetched.current) return;
    hasFetched.current = true;

    const fetchDashboardData = async () => {
      try {
        const response = await dashboardService.getDashboardData();
        setVessels(response.vessels);
        setTotalVessels(response.totalVessels);
      } catch (error) {
        console.error("Failed to fetch dashboard data:", error);
      }
    };
    fetchDashboardData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredVessels = useMemo(() => {
    return vessels.filter((vessel) => {
      const matchesSearch =
        vessel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vessel.imoNumber.includes(searchTerm) ||
        vessel.mmsiNumber.includes(searchTerm) ||
        vessel.flagState.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vessel.vesselType.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus =
        filterStatus === "all" || vessel.status === filterStatus;
      const matchesType =
        filterType === "all" || vessel.vesselType === filterType;

      return matchesSearch && matchesStatus && matchesType;
    });
  }, [vessels, searchTerm, filterStatus, filterType]);

  const stats = useMemo(() => {
    const activeVessels = vessels.filter((v) => v.status === "active").length;
    const vesselTypes = new Set(vessels.map((v) => v.vesselType)).size;
    const countries = new Set(vessels.map((v) => v.flagState)).size;

    return {
      total: totalVessels || vessels.length,
      active: activeVessels,
      types: vesselTypes,
      countries,
    };
  }, [vessels, totalVessels]);

  const uniqueVesselTypes = useMemo(() => {
    return Array.from(new Set(vessels.map((v) => v.vesselType))).sort();
  }, [vessels]);

  return {
    filteredVessels,
    stats,
    uniqueVesselTypes,
    searchTerm,
    filterStatus,
    filterType,
    setSearchTerm,
    setFilterStatus,
    setFilterType,
    setTotalVessels,
  };
};

export default useDashboard;
