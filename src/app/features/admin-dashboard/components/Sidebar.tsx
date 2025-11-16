import {
  HiHome,
  HiChartBar,
  HiUsers,
  HiCog,
  HiDocumentText,
  HiCollection,
  HiX,
} from "react-icons/hi";

interface SidebarItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href?: string;
}

const sidebarItems: SidebarItem[] = [
  { icon: HiHome, label: "Dashboard", href: "/" },
  { icon: HiChartBar, label: "Analytics", href: "/analytics" },
  { icon: HiUsers, label: "Users", href: "/users" },
  { icon: HiCollection, label: "Products", href: "/products" },
  { icon: HiDocumentText, label: "Reports", href: "/reports" },
  { icon: HiCog, label: "Settings", href: "/settings" },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-[#111116]/95 backdrop-blur-xl border-r border-white/10 z-40 transition-transform duration-300 ease-in-out shadow-2xl ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Header */}
          <div className="flex items-center justify-between p-5 border-b border-white/10 lg:hidden">
            <h2 className="text-lg font-bold text-white">Menu</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-gray-400 hover:bg-white/10 hover:text-purple-400 transition-all duration-300 hover:scale-105 active:scale-95"
              aria-label="Close sidebar"
            >
              <HiX className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-purple-500/20 scrollbar-track-transparent">
            <ul className="space-y-2">
              {sidebarItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = index === 0; // First item active for demo

                return (
                  <li key={item.label}>
                    <a
                      href={item.href || "#"}
                      className={`
                        group flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all duration-300 relative
                        ${
                          isActive
                            ? "bg-gradient-to-r from-purple-600/30 via-pink-600/20 to-purple-600/30 text-purple-200 font-semibold border border-purple-500/40 shadow-lg shadow-purple-500/20"
                            : "text-gray-400 hover:bg-white/10 hover:text-purple-300 hover:border hover:border-white/10"
                        }
                      `}
                    >
                      {/* Gradient overlay on hover for non-active items */}
                      {!isActive && (
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-pink-600/0 to-purple-600/0 group-hover:from-purple-600/10 group-hover:via-pink-600/5 group-hover:to-purple-600/10 rounded-2xl transition-all duration-300" />
                      )}
                      <Icon
                        className={`w-5 h-5 relative z-10 transition-all duration-300 ${
                          isActive
                            ? "text-purple-300"
                            : "text-gray-500 group-hover:text-purple-400 group-hover:scale-110"
                        }`}
                      />
                      <span className="text-sm font-medium relative z-10">
                        {item.label}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer Section */}
          <div className="p-4 border-t border-white/10">
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#0a0a0f]/80 backdrop-blur-sm border border-white/10 hover:border-purple-500/40 hover:bg-[#0a0a0f] transition-all duration-300 group cursor-pointer shadow-lg shadow-black/20">
              <div className="w-11 h-11 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/50 group-hover:scale-110 transition-all duration-300 ring-2 ring-purple-500/20">
                <span className="text-white font-bold text-sm">AU</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-white truncate group-hover:text-purple-300 transition-colors duration-300">
                  Admin User
                </p>
                <p className="text-xs text-gray-500 truncate group-hover:text-gray-400 transition-colors duration-300">
                  admin@example.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
