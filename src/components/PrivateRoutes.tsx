import { Navigate } from "react-router-dom";
import storage from "../libs/storage";
import { useStore } from "../store";
import ModuleSelection from "../app/features/auth/pages/ModuleSelection";

const PrivateRoutes = ({ children }: { children: React.ReactNode }) => {
  const token = storage.getToken();
  const selectedModules = useStore((state) => state.selectedModules);
  const role = useStore((state) => state.role);
  console.log(selectedModules, role);
  if (selectedModules === null && role === "client") {
    return <ModuleSelection />;
  }
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default PrivateRoutes;
