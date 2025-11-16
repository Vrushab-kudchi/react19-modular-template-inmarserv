import {
  HiHome,
  HiChartBar,
  HiUsers,
  HiCog,
  HiDocumentText,
  HiCollection,
  HiX,
  HiClipboard,
  HiFolder,
  HiSearch,
  HiCheckCircle,
} from "react-icons/hi";
import {
  FaShip,
  FaTools,
  FaUserTie,
  FaFileContract,
  FaFileAlt,
  FaNetworkWired,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useStore } from "../../../../store";

interface SidebarItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
  badge?: string;
  section?: string;
}

const sidebarItems: SidebarItem[] = [
  // Main Navigation
  {
    icon: HiHome,
    label: "Dashboard",
    href: "/admin/dashboard",
    section: "main",
  },

  // Vessel Management
  {
    icon: FaShip,
    label: "Vessels",
    href: "/admin/vessels",
    section: "vessels",
  },

  // Inspections & Services
  {
    icon: HiClipboard,
    label: "Inspections",
    href: "/admin/inspections",
    section: "services",
  },
  {
    icon: HiCheckCircle,
    label: "Checklists",
    href: "/admin/checklists",
    section: "services",
  },
  {
    icon: FaFileAlt,
    label: "Checklist Templates",
    href: "/admin/checklist-templates",
    section: "services",
  },
  {
    icon: FaFileContract,
    label: "Service Requests",
    href: "/admin/service-requests",
    section: "services",
  },
  {
    icon: FaNetworkWired,
    label: "Bridge Plus Requests",
    href: "/admin/bridge-plus-requests",
    section: "services",
  },
  {
    icon: HiCollection,
    label: "Services",
    href: "/admin/services",
    section: "services",
  },

  // Equipment Management
  {
    icon: FaTools,
    label: "Equipment",
    href: "/admin/equipment",
    section: "equipment",
  },
  {
    icon: FaFileAlt,
    label: "Equipment Templates",
    href: "/admin/equipment-templates",
    section: "equipment",
  },
  {
    icon: HiFolder,
    label: "Equipment Types",
    href: "/admin/equipment-types",
    section: "equipment",
  },

  // User Management
  { icon: HiUsers, label: "Clients", href: "/admin/clients", section: "users" },
  {
    icon: FaUserTie,
    label: "Engineers",
    href: "/admin/engineers",
    section: "users",
  },
  {
    icon: HiClipboard,
    label: "Engineer Inspections",
    href: "/admin/engineer-inspections",
    section: "users",
  },

  // System
  {
    icon: HiFolder,
    label: "Modules",
    href: "/admin/modules",
    section: "system",
  },
  { icon: HiSearch, label: "Search", href: "/admin/search", section: "system" },
  {
    icon: HiDocumentText,
    label: "Audit",
    href: "/admin/audit",
    section: "system",
  },
  {
    icon: HiChartBar,
    label: "Analytics",
    href: "/admin/analytics",
    section: "system",
  },
  {
    icon: HiCog,
    label: "Settings",
    href: "/admin/settings",
    section: "system",
  },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const location = useLocation();
  const name = useStore((state) => state.name);
  const email = useStore((state) => state.email);
  const role = useStore((state) => state.role);

  // Get user initials for avatar
  const getInitials = () => {
    if (name) {
      const names = name.split(" ");
      if (names.length >= 2) {
        return `${names[0][0]}${names[1][0]}`.toUpperCase();
      }
      return name.substring(0, 2).toUpperCase();
    }
    return "U";
  };

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
          <nav className="flex-1 overflow-y-auto overflow-x-hidden p-4 custom-scrollbar pr-2 scroll-smooth">
            <ul className="space-y-4">
              {(() => {
                // Group items by section
                const groupedItems: Record<string, typeof sidebarItems> = {};
                sidebarItems.forEach((item) => {
                  const section = item.section || "other";
                  if (!groupedItems[section]) {
                    groupedItems[section] = [];
                  }
                  groupedItems[section].push(item);
                });

                // Section labels
                const sectionLabels: Record<string, string> = {
                  main: "",
                  vessels: "Vessel Management",
                  services: "Inspections & Services",
                  equipment: "Equipment Management",
                  users: "User Management",
                  system: "System",
                };

                return Object.entries(groupedItems).map(([section, items]) => (
                  <li key={section}>
                    {sectionLabels[section] && (
                      <div className="px-4 py-2 mb-2">
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                          {sectionLabels[section]}
                        </span>
                      </div>
                    )}
                    <ul className="space-y-2">
                      {items.map((item) => {
                        const Icon = item.icon;
                        const isActive = location.pathname === item.href;

                        return (
                          <li key={item.label}>
                            <Link
                              to={item.href}
                              onClick={() => {
                                // Close sidebar on mobile when navigating
                                if (window.innerWidth < 1024) {
                                  onClose();
                                }
                              }}
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
                              {item.badge && (
                                <span className="ml-auto px-2 py-0.5 text-xs font-semibold rounded-full bg-purple-500/20 text-purple-300 relative z-10">
                                  {item.badge}
                                </span>
                              )}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                ));
              })()}
            </ul>
          </nav>

          {/* Footer Section */}
          <div className="p-4 border-t border-white/10">
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#0a0a0f]/80 backdrop-blur-sm border border-white/10 hover:border-purple-500/40 hover:bg-[#0a0a0f] transition-all duration-300 group cursor-pointer shadow-lg shadow-black/20">
              <div className="w-11 h-11 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/50 group-hover:scale-110 transition-all duration-300 ring-2 ring-purple-500/20">
                <span className="text-white font-bold text-sm">
                  {getInitials()}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-white truncate group-hover:text-purple-300 transition-colors duration-300">
                  {name || "User"}
                </p>
                <p className="text-xs text-gray-500 truncate group-hover:text-gray-400 transition-colors duration-300">
                  {email || "user@example.com"}
                </p>
                {role && (
                  <p className="text-xs text-purple-400/70 mt-0.5 capitalize">
                    {role}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
