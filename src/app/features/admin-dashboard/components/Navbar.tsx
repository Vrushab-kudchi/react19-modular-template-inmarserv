import { HiMenu, HiBell, HiUserCircle, HiSearch, HiX } from "react-icons/hi";

interface NavbarProps {
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export const Navbar = ({ sidebarOpen, onToggleSidebar }: NavbarProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#111116]/95 backdrop-blur-xl shadow-2xl border-b border-white/10">
      <div className="max-w-[100vw] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left section - Logo and Toggle Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={onToggleSidebar}
              className="p-2.5 rounded-xl text-gray-400 hover:bg-white/10 hover:text-purple-400 transition-all duration-300 hover:scale-105 active:scale-95 border border-transparent hover:border-white/10"
              aria-label={sidebarOpen ? "Hide sidebar" : "Show sidebar"}
              title={sidebarOpen ? "Hide sidebar" : "Show sidebar"}
            >
              {sidebarOpen ? (
                <HiX className="w-5 h-5" />
              ) : (
                <HiMenu className="w-5 h-5" />
              )}
            </button>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30 ring-2 ring-purple-500/20">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="hidden sm:block text-xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                Admin Dashboard
              </span>
            </div>
          </div>

          {/* Center section - Search Bar (Desktop) */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full group">
              <HiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-purple-400 transition-colors duration-300 z-10" />
              <input
                type="text"
                placeholder="Search anything..."
                className="w-full pl-12 pr-4 py-3 bg-[#0a0a0f]/80 backdrop-blur-sm border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 hover:border-white/20 transition-all duration-300 shadow-lg shadow-black/20"
              />
            </div>
          </div>

          {/* Right section - Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Mobile Search Button */}
            <button
              className="md:hidden p-2.5 rounded-xl text-gray-400 hover:bg-white/10 hover:text-purple-400 transition-all duration-300 hover:scale-105 active:scale-95"
              aria-label="Search"
            >
              <HiSearch className="w-5 h-5" />
            </button>

            {/* Notifications */}
            <button
              className="relative p-2.5 rounded-xl text-gray-400 hover:bg-white/10 hover:text-purple-400 transition-all duration-300 hover:scale-105 active:scale-95"
              aria-label="Notifications"
            >
              <HiBell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full border-2 border-[#111116] shadow-lg shadow-pink-500/60 animate-pulse"></span>
            </button>

            {/* User Profile */}
            <button
              className="flex items-center gap-2.5 p-2 pr-3 rounded-xl text-gray-400 hover:bg-white/10 hover:text-purple-400 transition-all duration-300 hover:scale-105 active:scale-95"
              aria-label="User menu"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/30">
                <HiUserCircle className="w-5 h-5 text-white" />
              </div>
              <span className="hidden sm:block text-sm font-semibold text-gray-300">
                Admin User
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
