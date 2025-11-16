import { FaShip, FaSearch } from "react-icons/fa";
import useDashboard from "../hooks/useDashboard";
import VesselCard from "../components/VesselCard";
import StatCard from "../components/StatCard";

const Dashboard = () => {
  const {
    filteredVessels,
    stats,
    uniqueVesselTypes,
    searchTerm,
    filterStatus,
    filterType,
    setSearchTerm,
    setFilterStatus,
    setFilterType,
  } = useDashboard();
  console.log(filteredVessels);

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
          <FaSearch
            className="absolute left-4 top-1/2 text-gray-500 group-focus-within:text-purple-500 transition-colors z-10 pointer-events-none"
            style={{ transform: "translateY(-50%)" }}
          />
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

export default Dashboard;
