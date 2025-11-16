import { createBrowserRouter } from "react-router-dom";
import Login from "./features/auth/pages/Login";
import PrivateRoutes from "../components/PrivateRoutes";
import Dashboard from "./features/admin-dashboard/pages/Dashboard";
import { AdminRoute } from "../components/AdminRoutes";
import VesselModule from "./features/admin-dashboard/pages/Vessels";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoutes>
        <div>Hello world!</div>
      </PrivateRoutes>
    ),
  },
  {
    path: "admin/dashboard",
    element: (
      <AdminRoute>
        <Dashboard />
      </AdminRoute>
    ),
  },
  {
    path: "admin/vessels",
    element: (
      <AdminRoute>
        <VesselModule />
      </AdminRoute>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
