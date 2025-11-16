import { useEffect, useState, useMemo } from "react";
import { dashboardService } from "../services/dashboardService";
import { useStore } from "../../../../store";
import {
  FaShip,
  FaMapMarkerAlt,
  FaFlag,
  FaSearch,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import type { Vessel } from "../types";

const Dashboard = () => {
  const { setVessels } = useStore();
  const vessels = useStore((state) => state.vessels);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [filterType, setFilterType] = useState<string>("all");
  const [loading, setLoading] = useState(true);
  const [totalVessels, setTotalVessels] = useState(0);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        const response = await dashboardService.getDashboardData();
        setVessels(response.vessels);
        setTotalVessels(response.totalVessels);
      } catch (error) {
        console.error("Failed to fetch dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDashboardData();
  }, [setVessels]);

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

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-10 w-10 border-2 border-transparent border-t-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-light text-white mb-2 tracking-tight">
          Fleet Overview
        </h1>
        <p className="text-gray-500 text-sm">Monitor and manage your vessels</p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <StatCard label="Total" value={stats.total} />
        <StatCard label="Active" value={stats.active} accent="green" />
        <StatCard label="Types" value={stats.types} accent="purple" />
        <StatCard label="Countries" value={stats.countries} accent="pink" />
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative group">
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 group-focus-within:text-purple-500 transition-colors" />
          <input
            type="text"
            placeholder="Search vessels..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all backdrop-blur-sm"
          />
        </div>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all backdrop-blur-sm"
        >
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all backdrop-blur-sm"
        >
          <option value="all">All Types</option>
          {uniqueVesselTypes.map((type) => (
            <option key={type} value={type}>
              {type.charAt(0).toUpperCase() + type.slice(1).replace("_", " ")}
            </option>
          ))}
        </select>
      </div>

      {/* Results Count */}
      <div className="text-sm text-gray-500">
        {filteredVessels.length}{" "}
        {filteredVessels.length === 1 ? "vessel" : "vessels"}
      </div>

      {/* Vessels Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {filteredVessels.map((vessel, index) => (
          <VesselCard key={vessel._id} vessel={vessel} index={index} />
        ))}
      </div>

      {filteredVessels.length === 0 && (
        <div className="text-center py-20">
          <FaShip className="mx-auto text-5xl mb-4 text-gray-700" />
          <p className="text-gray-500">No vessels found</p>
        </div>
      )}
    </div>
  );
};

interface StatCardProps {
  label: string;
  value: number;
  accent?: "green" | "purple" | "pink";
}

const StatCard = ({ label, value, accent }: StatCardProps) => {
  const accentColors = {
    green: "border-green-500/20",
    purple: "border-purple-500/20",
    pink: "border-pink-500/20",
  };

  return (
    <div
      className={`bg-white/5 border ${
        accent ? accentColors[accent] : "border-white/10"
      } rounded-xl p-5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:scale-[1.02]`}
    >
      <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">
        {label}
      </p>
      <p className="text-3xl font-light text-white">{value}</p>
    </div>
  );
};

interface VesselCardProps {
  vessel: Vessel;
  index: number;
}

const VesselCard = ({ vessel, index }: VesselCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="bg-white/5 border border-white/10 rounded-xl p-6 transition-all duration-300 hover:border-purple-500/30 hover:bg-white/10 group animate-fade-in-up"
      style={{ animationDelay: `${index * 30}ms` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-medium text-white mb-1.5 truncate">
            {vessel.name}
          </h3>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <FaFlag className="text-[10px]" />
            <span className="truncate">{vessel.flagState}</span>
          </div>
        </div>
        <div
          className={`ml-3 h-2 w-2 rounded-full flex-shrink-0 ${
            vessel.status === "active" ? "bg-green-500" : "bg-gray-500"
          }`}
        />
      </div>

      {/* Key Info */}
      <div className="space-y-2.5 mb-5">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">IMO</span>
          <span className="text-white font-mono">{vessel.imoNumber}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Type</span>
          <span className="text-white capitalize">
            {vessel.vesselType.replace("_", " ")}
          </span>
        </div>
        {vessel.currentLocation && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-500 flex items-center gap-1">
              <FaMapMarkerAlt className="text-[10px]" />
              Location
            </span>
            <span className="text-white truncate ml-2 text-right">
              {vessel.currentLocation}
            </span>
          </div>
        )}
      </div>

      {/* Expand Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-center gap-2 py-2.5 text-xs text-gray-400 hover:text-purple-400 transition-colors border-t border-white/10 pt-4 group-hover:border-white/20"
      >
        {isExpanded ? (
          <>
            <FaChevronUp />
            <span>Less</span>
          </>
        ) : (
          <>
            <FaChevronDown />
            <span>More</span>
          </>
        )}
      </button>

      {/* Expanded Details */}
      {isExpanded && (
        <div className="mt-5 pt-5 border-t border-white/10 space-y-4 animate-fade-in">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-500 text-xs mb-1">MMSI</p>
              <p className="text-white font-mono">{vessel.mmsiNumber}</p>
            </div>
            <div>
              <p className="text-gray-500 text-xs mb-1">Call Sign</p>
              <p className="text-white">{vessel.callSign || "—"}</p>
            </div>
            <div>
              <p className="text-gray-500 text-xs mb-1">Year Built</p>
              <p className="text-white">{vessel.yearBuilt || "—"}</p>
            </div>
            <div>
              <p className="text-gray-500 text-xs mb-1">Gross Tonnage</p>
              <p className="text-white">
                {vessel.grossTonnage
                  ? vessel.grossTonnage.toLocaleString()
                  : "—"}
              </p>
            </div>
            <div>
              <p className="text-gray-500 text-xs mb-1">Deadweight</p>
              <p className="text-white">
                {vessel.deadweight ? vessel.deadweight.toLocaleString() : "—"}
              </p>
            </div>
            {vessel.certificateNumber && (
              <div>
                <p className="text-gray-500 text-xs mb-1">Certificate</p>
                <p className="text-white text-xs">{vessel.certificateNumber}</p>
              </div>
            )}
          </div>

          {(vessel.owner || vessel.operator) && (
            <div className="pt-4 border-t border-white/10 space-y-2">
              {vessel.owner && (
                <div>
                  <p className="text-gray-500 text-xs mb-1">Owner</p>
                  <p className="text-white text-sm">{vessel.owner}</p>
                </div>
              )}
              {vessel.operator && (
                <div>
                  <p className="text-gray-500 text-xs mb-1">Operator</p>
                  <p className="text-white text-sm">{vessel.operator}</p>
                </div>
              )}
            </div>
          )}

          {(vessel.email || vessel.telephone) && (
            <div className="pt-4 border-t border-white/10 space-y-2">
              {vessel.email && (
                <div>
                  <p className="text-gray-500 text-xs mb-1">Email</p>
                  <a
                    href={`mailto:${vessel.email}`}
                    className="text-purple-400 hover:text-purple-300 text-sm break-all"
                  >
                    {vessel.email}
                  </a>
                </div>
              )}
              {vessel.telephone && (
                <div>
                  <p className="text-gray-500 text-xs mb-1">Phone</p>
                  <p className="text-white text-sm">{vessel.telephone}</p>
                </div>
              )}
            </div>
          )}

          {vessel.expiryDate && (
            <div className="pt-4 border-t border-white/10">
              <p className="text-gray-500 text-xs mb-1">Certificate Expires</p>
              <p className="text-white text-sm">
                {new Date(vessel.expiryDate).toLocaleDateString()}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
