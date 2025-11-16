import {
  FaPlus,
  FaShip,
  FaFlag,
  FaEdit,
  FaTrash,
  FaTimes,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { dashboardService } from "../services/dashboardService";
import type { VesselResponse } from "../types";
import DatePicker from "../../../../components/DatePicker";

const VesselModule = () => {
  // This will be replaced with actual data from props/state later
  const [vessels, setVessels] = useState<VesselResponse[]>([]);
  const [isCreateVesselModalOpen, setIsCreateVesselModalOpen] = useState(false);
  // Modules and clients will be fetched from API
  const [modules, setModules] = useState<Array<{ _id: string; name: string }>>(
    []
  );
  const [clients, setClients] = useState<Array<{ _id: string; name: string }>>(
    []
  );
  useEffect(() => {
    const fetchVessels = async () => {
      try {
        const response = await dashboardService.getVesselModules();
        setVessels(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchVessels();
  }, []);

  const handleCreateVessel = () => {
    setIsCreateVesselModalOpen(!isCreateVesselModalOpen);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatVesselType = (type: string) => {
    return type.replace("_", " ").replace(/\b\w/g, (l) => l.toUpperCase());
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-light text-white mb-2 tracking-tight">
            Vessels
          </h1>
          <p className="text-gray-500 text-sm">
            Manage and monitor your vessel fleet
          </p>
        </div>
        <button
          onClick={handleCreateVessel}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium rounded-xl transition-all duration-200 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 group"
        >
          <FaPlus className="group-hover:rotate-90 transition-transform duration-200" />
          <span>Create Vessel</span>
        </button>
      </div>

      {/* Table Container */}
      <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm">
        <div className="overflow-x-auto custom-scrollbar scroll-smooth">
          <table className="w-full min-w-[1000px]">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Vessel Name
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  IMO Number
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Flag State
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Client
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Modules
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Created
                </th>
                <th className="px-6 py-4 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {vessels.map((vessel) => (
                <tr
                  key={vessel.id}
                  className="hover:bg-white/5 transition-colors duration-150 group"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center border border-white/10">
                        <FaShip className="text-purple-400 text-sm" />
                      </div>
                      <div>
                        <div className="text-white font-medium">
                          {vessel.name}
                        </div>
                        {vessel.mmsiNumber && (
                          <div className="text-xs text-gray-500 font-mono">
                            MMSI: {vessel.mmsiNumber}
                          </div>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-white font-mono text-sm">
                      {vessel.imoNumber}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <FaFlag className="text-gray-500 text-xs" />
                      <span className="text-white text-sm">
                        {vessel.flagState || "—"}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      {formatVesselType(vessel.vesselType)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium ${
                        vessel.status === "active"
                          ? "bg-green-500/20 text-green-300 border border-green-500/30"
                          : "bg-gray-500/20 text-gray-300 border border-gray-500/30"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                          vessel.status === "active"
                            ? "bg-green-400"
                            : "bg-gray-400"
                        }`}
                      />
                      {vessel.status.charAt(0).toUpperCase() +
                        vessel.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-white text-sm">
                      {vessel.clientId?.name || vessel.clientName || "—"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {vessel.modulesId && vessel.modulesId.length > 0 ? (
                      <div className="flex flex-wrap gap-1">
                        {vessel.modulesId.slice(0, 2).map((module) => (
                          <span
                            key={module._id}
                            className="inline-flex items-center px-2 py-1 rounded text-xs bg-white/10 text-gray-300 border border-white/10"
                          >
                            {module.name}
                          </span>
                        ))}
                        {vessel.modulesId.length > 2 && (
                          <span className="inline-flex items-center px-2 py-1 rounded text-xs bg-white/10 text-gray-300 border border-white/10">
                            +{vessel.modulesId.length - 2}
                          </span>
                        )}
                      </div>
                    ) : (
                      <span className="text-gray-500 text-sm">No modules</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-gray-400 text-sm">
                      {formatDate(vessel.createdAt)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        className="p-2 rounded-lg hover:bg-white/10 text-gray-400 hover:text-purple-400 transition-colors"
                        title="Edit"
                      >
                        <FaEdit className="text-sm" />
                      </button>
                      <button
                        className="p-2 rounded-lg hover:bg-white/10 text-gray-400 hover:text-red-400 transition-colors"
                        title="Delete"
                      >
                        <FaTrash className="text-sm" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {vessels.length === 0 && (
          <div className="text-center py-20">
            <FaShip className="mx-auto text-5xl mb-4 text-gray-700" />
            <p className="text-gray-500 mb-2">No vessels found</p>
            <p className="text-gray-600 text-sm">
              Click "Create Vessel" to add your first vessel
            </p>
          </div>
        )}
      </div>

      {/* Footer Info */}
      {vessels.length > 0 && (
        <div className="text-sm text-gray-500">
          Showing {vessels.length} {vessels.length === 1 ? "vessel" : "vessels"}
        </div>
      )}

      {/* Create Vessel Modal */}
      {isCreateVesselModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleCreateVessel}
          />

          {/* Modal */}
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#111116] rounded-2xl shadow-2xl border border-white/10 overflow-hidden flex flex-col animate-fade-in">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center border border-purple-500/20">
                  <FaShip className="text-purple-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-light text-white">
                    Create New Vessel
                  </h2>
                  <p className="text-sm text-gray-400">
                    Add a new vessel to your fleet
                  </p>
                </div>
              </div>
              <button
                onClick={handleCreateVessel}
                className="p-2 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
              >
                <FaTimes />
              </button>
            </div>

            {/* Form Content - Scrollable */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
              <form className="space-y-6">
                {/* Basic Information Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-white border-b border-white/10 pb-2">
                    Basic Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Client <span className="text-red-400">*</span>
                      </label>
                      <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all backdrop-blur-sm">
                        <option value="">Select client</option>
                        {clients.map((client) => (
                          <option key={client._id} value={client._id}>
                            {client.name}
                          </option>
                        ))}
                      </select>
                      {clients.length === 0 && (
                        <p className="text-xs text-gray-500 mt-1">
                          Clients will be loaded from API
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Vessel Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter vessel name"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all backdrop-blur-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        IMO Number <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter IMO number"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all backdrop-blur-sm font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        MMSI Number <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter MMSI number"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all backdrop-blur-sm font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Call Sign
                      </label>
                      <input
                        type="text"
                        placeholder="Enter call sign"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all backdrop-blur-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Flag State <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter flag state"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all backdrop-blur-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Vessel Type <span className="text-red-400">*</span>
                      </label>
                      <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all backdrop-blur-sm">
                        <option value="">Select vessel type</option>
                        <option value="cargo">Cargo</option>
                        <option value="tanker">Tanker</option>
                        <option value="container">Container</option>
                        <option value="bulk_carrier">Bulk Carrier</option>
                        <option value="general_cargo">General Cargo</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Status <span className="text-red-400">*</span>
                      </label>
                      <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all backdrop-blur-sm">
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                        <option value="maintenance">Maintenance</option>
                        <option value="dry_dock">Dry Dock</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Year Built
                      </label>
                      <input
                        type="number"
                        placeholder="Enter year"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all backdrop-blur-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Modules Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-white border-b border-white/10 pb-2">
                    Modules
                  </h3>
                  <div className="space-y-3">
                    <p className="text-sm text-gray-400 mb-4">
                      Select modules to assign to this vessel
                    </p>
                    {modules.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {modules.map((module) => (
                          <div
                            key={module._id}
                            className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              id={`module-${module._id}`}
                              value={module._id}
                              className="h-4 w-4 rounded border-white/20 bg-white/5 text-purple-600 focus:ring-purple-500/50 focus:ring-2 focus:ring-offset-0 cursor-pointer transition-colors checked:bg-purple-600 checked:border-purple-600"
                            />
                            <label
                              htmlFor={`module-${module._id}`}
                              className="text-sm text-white cursor-pointer flex-1"
                            >
                              {module.name}
                            </label>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8 text-gray-500 text-sm">
                        No modules available. Modules will be loaded from API.
                      </div>
                    )}
                  </div>
                </div>

                {/* Dimensions Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-white border-b border-white/10 pb-2">
                    Dimensions & Specifications
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Gross Tonnage
                      </label>
                      <input
                        type="number"
                        placeholder="Enter tonnage"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all backdrop-blur-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Deadweight
                      </label>
                      <input
                        type="number"
                        placeholder="Enter deadweight"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all backdrop-blur-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Length (m)
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        placeholder="Enter length"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all backdrop-blur-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Width (m)
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        placeholder="Enter width"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all backdrop-blur-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Draft (m)
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        placeholder="Enter draft"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all backdrop-blur-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Classification Society
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., ABS, DNV GL"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all backdrop-blur-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Ownership & Operations Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-white border-b border-white/10 pb-2">
                    Ownership & Operations
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Owner
                      </label>
                      <input
                        type="text"
                        placeholder="Enter owner name"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all backdrop-blur-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Operator
                      </label>
                      <input
                        type="text"
                        placeholder="Enter operator name"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all backdrop-blur-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Client Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter client name"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all backdrop-blur-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Port of Registry
                      </label>
                      <input
                        type="text"
                        placeholder="Enter port of registry"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all backdrop-blur-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Home Port
                      </label>
                      <input
                        type="text"
                        placeholder="Enter home port"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all backdrop-blur-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Current Location
                      </label>
                      <input
                        type="text"
                        placeholder="Enter current location"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all backdrop-blur-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Information Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-white border-b border-white/10 pb-2">
                    Contact Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="vessel@example.com"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all backdrop-blur-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Telephone
                      </label>
                      <input
                        type="tel"
                        placeholder="Enter telephone number"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all backdrop-blur-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        SAT-C
                      </label>
                      <input
                        type="text"
                        placeholder="Enter SAT-C information"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all backdrop-blur-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Code
                      </label>
                      <input
                        type="text"
                        placeholder="Enter vessel code"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all backdrop-blur-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Information Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-white border-b border-white/10 pb-2">
                    Additional Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Series
                      </label>
                      <input
                        type="text"
                        placeholder="Enter series"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all backdrop-blur-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Vessel Class
                      </label>
                      <input
                        type="text"
                        placeholder="Enter vessel class"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all backdrop-blur-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Fleet Group
                      </label>
                      <input
                        type="text"
                        placeholder="Enter fleet group"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all backdrop-blur-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Planned Yard
                      </label>
                      <input
                        type="text"
                        placeholder="Enter planned yard"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all backdrop-blur-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Yard Date
                      </label>
                      <DatePicker placeholder="Select yard date" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Type
                      </label>
                      <input
                        type="text"
                        placeholder="Enter type"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all backdrop-blur-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Inspection Information Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-white border-b border-white/10 pb-2">
                    Inspection Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Last Inspection
                      </label>
                      <DatePicker placeholder="Select last inspection date" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Next Inspection
                      </label>
                      <DatePicker placeholder="Select next inspection date" />
                    </div>
                  </div>
                </div>

                {/* Certificate Information Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-white border-b border-white/10 pb-2">
                    Certificate Information (Optional)
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Certificate Number
                      </label>
                      <input
                        type="text"
                        placeholder="Enter certificate number"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all backdrop-blur-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Expiry Date
                      </label>
                      <DatePicker placeholder="Select expiry date" />
                    </div>
                  </div>
                </div>
              </form>
            </div>

            {/* Footer Actions */}
            <div className="flex items-center justify-end gap-3 p-6 border-t border-white/10 bg-white/5">
              <button
                type="button"
                onClick={handleCreateVessel}
                className="px-6 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium rounded-xl transition-all duration-200 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30"
              >
                Create Vessel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VesselModule;
