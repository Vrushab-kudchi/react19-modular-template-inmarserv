import { Navigate } from "react-router-dom";
import storage from "../libs/storage";

const PrivateRoutes = ({ children }: { children: React.ReactNode }) => {
  const token = storage.getToken();
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default PrivateRoutes;
