import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { useNavigation } from "../hooks/useNavigation";

interface AdminLayoutProps {
  children: ReactNode;
}

export const AdminLayout = ({ children }: AdminLayoutProps) => {
  const { sidebarOpen, toggleSidebar, closeSidebar, isLoading } =
    useNavigation();

  return (
    <div className="min-h-screen bg-[#0a0a0f] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <Navbar sidebarOpen={sidebarOpen} onToggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />

      <main
        className={`pt-16 min-h-screen transition-all duration-300 ${
          sidebarOpen ? "ml-0 lg:ml-64" : "ml-0"
        }`}
      >
        <div className="p-4 sm:p-6 lg:p-8 relative z-10 text-white">
          {/* Loading Overlay - keeps children mounted to prevent useEffect re-runs */}
          {isLoading && (
            <div className="fixed inset-0 bg-[#0a0a0f]/80 backdrop-blur-sm flex items-center justify-center z-50">
              <div className="animate-spin rounded-full h-12 w-12 border-2 border-transparent border-t-purple-500"></div>
            </div>
          )}
          {/* Always render children - use opacity to hide when loading */}
          <div className={isLoading ? "opacity-50 pointer-events-none" : ""}>
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};
