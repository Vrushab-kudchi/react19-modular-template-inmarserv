import { useState } from "react";
import {
  FaFlag,
  FaMapMarkerAlt,
  FaChevronUp,
  FaChevronDown,
} from "react-icons/fa";
import type { Vessel } from "../types";

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

export default VesselCard;
