import { useState } from "react";
import { useStore } from "../../../../store";

export const useModuleSelection = () => {
  const name = useStore((state) => state.name);
  const modules = useStore((state) => state.modules);
  const setModules = useStore((state) => state.setModules);

  const handleModuleClick = (moduleKeyword: string) => {
    setModules(moduleKeyword);
  };

  const [hoveredModule, setHoveredModule] = useState<string | null>(null);

  return { name, modules, handleModuleClick, hoveredModule, setHoveredModule };
};
