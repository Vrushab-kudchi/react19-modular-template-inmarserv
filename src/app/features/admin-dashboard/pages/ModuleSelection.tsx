import { FiBox, FiAnchor, FiSearch, FiLayers, FiGrid } from "react-icons/fi";
import { useModuleSelection } from "../hooks/useModuleSelection";

// Icon mapping for different module keywords
const getModuleIcon = (keyword: string) => {
  const iconMap: Record<string, typeof FiBox> = {
    dry_dock: FiAnchor,
    bridge_plus: FiLayers,
    inspection: FiSearch,
  };
  return iconMap[keyword] || FiGrid;
};

export default function ModuleSelection() {
  // Only show modules if role is "client"
  const { name, modules, handleModuleClick, hoveredModule, setHoveredModule } =
    useModuleSelection();
  if (!modules || modules.length === 0) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center p-4">
        <div className="w-full max-w-4xl">
          <div className="bg-[#111116] rounded-3xl shadow-2xl p-10 border border-white/5 text-center">
            <h1 className="text-4xl font-bold text-white mb-2">
              No Modules Available
            </h1>
            <p className="text-gray-400">
              You don't have access to any modules at this time.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="w-full max-w-6xl relative z-10">
        <div className="bg-[#111116] rounded-3xl shadow-2xl p-10 border border-white/5 backdrop-blur-sm">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">
              Module Selection
            </h1>
            <p className="text-gray-400">
              Welcome,{" "}
              <span className="text-purple-400 font-semibold">{name}</span>!
              Please select a module to continue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module) => {
              const IconComponent = getModuleIcon(module.keyword);
              const isHovered = hoveredModule === module._id;

              return (
                <div
                  key={module._id}
                  onClick={() => handleModuleClick(module.keyword)}
                  onMouseEnter={() => setHoveredModule(module._id)}
                  onMouseLeave={() => setHoveredModule(null)}
                  className="group relative bg-[#0a0a0f] rounded-2xl p-6 border border-white/5 cursor-pointer transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-pink-600/0 to-purple-600/0 group-hover:from-purple-600/10 group-hover:via-pink-600/5 group-hover:to-purple-600/10 rounded-2xl transition-all duration-300" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 group-hover:border-purple-500/60 transition-all duration-300 group-hover:scale-110">
                      <IconComponent
                        className={`w-7 h-7 transition-colors duration-300 ${
                          isHovered
                            ? "text-purple-400"
                            : "text-gray-400 group-hover:text-purple-300"
                        }`}
                      />
                    </div>

                    {/* Module Name */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                      {module.name}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-400 line-clamp-2 group-hover:text-gray-300 transition-colors duration-300">
                      {module.description}
                    </p>

                    {/* Arrow indicator */}
                    <div className="mt-4 flex items-center text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm font-medium">Select Module</span>
                      <svg
                        className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
