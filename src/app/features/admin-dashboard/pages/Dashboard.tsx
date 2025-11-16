import { useState, useEffect } from "react";
import { HiChartBar } from "react-icons/hi";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";

const Dashboard = () => {
  // Default to open on desktop, closed on mobile
  const [sidebarOpen, setSidebarOpen] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth >= 1024; // lg breakpoint
    }
    return true;
  });

  useEffect(() => {
    const handleResize = () => {
      // Only auto-adjust on initial load or when crossing breakpoint
      // Don't force open/close if user has manually toggled
      const isDesktop = window.innerWidth >= 1024;
      // Only auto-close on mobile if sidebar was open, don't auto-open on desktop
      if (!isDesktop && sidebarOpen) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [sidebarOpen]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

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
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content Area */}
      <main
        className={`pt-16 min-h-screen transition-all duration-300 ${
          sidebarOpen ? "lg:ml-64" : "lg:ml-0"
        }`}
      >
        <div className="p-4 sm:p-6 lg:p-8 relative z-10">
          {/* Content wrapper with dark theme */}
          <div className="max-w-7xl mx-auto">
            <div className="bg-[#111116]/80 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 border border-white/10">
              <div className="mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent mb-3">
                  Dashboard
                </h1>
                <p className="text-gray-400 text-sm sm:text-base">
                  Welcome to your admin dashboard
                </p>
              </div>

              {/* Placeholder content */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div
                    key={item}
                    className="group bg-[#0a0a0f]/80 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-2xl flex items-center justify-center mb-4 border border-purple-500/40 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-500/30 transition-all duration-300">
                      <HiChartBar className="w-7 h-7 text-purple-400" />
                    </div>
                    <h3 className="text-white font-semibold mb-2 group-hover:text-purple-300 transition-colors duration-300">
                      Card {item}
                    </h3>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                      Your dashboard content goes here
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
