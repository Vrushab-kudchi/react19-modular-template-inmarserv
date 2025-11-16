import { useState, useEffect } from "react";
import { useStore } from "../../../../store";

export const useNavigation = () => {
  // Default to open on desktop, closed on mobile
  const sidebarOpen = useStore((state) => state.sidebarOpen);
  const toggleSidebar = useStore((state) => state.toggleSidebar);
  const closeSidebar = useStore((state) => state.closeSidebar);

  useEffect(() => {
    const handleResize = () => {
      // Only auto-adjust on initial load or when crossing breakpoint
      // Don't force open/close if user has manually toggled
      const isDesktop = window.innerWidth >= 1024;
      // Only auto-close on mobile if sidebar was open, don't auto-open on desktop
      if (!isDesktop && sidebarOpen) {
        closeSidebar();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [sidebarOpen, closeSidebar]);

  return {
    sidebarOpen,
    toggleSidebar,
    closeSidebar,
  };
};
