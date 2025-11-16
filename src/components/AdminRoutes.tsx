import { useNavigate } from "react-router-dom";
import { AdminLayout } from "../app/features/admin-dashboard/components/AdminLayout";
import { useStore } from "../store";
import PrivateRoutes from "./PrivateRoutes";

export const AdminRoute = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const role = useStore((state) => state.role);
  if (role !== "super-admin") {
    navigate("/");
    return null;
  }
  return (
    <PrivateRoutes>
      <AdminLayout>{children}</AdminLayout>
    </PrivateRoutes>
  );
};
