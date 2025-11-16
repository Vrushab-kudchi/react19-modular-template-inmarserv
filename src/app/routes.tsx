import { createBrowserRouter } from "react-router-dom";
import Login from "./features/auth/pages/Login";
import PrivateRoutes from "../components/PrivateRoutes";
import Dashboard from "./features/admin-dashboard/pages/Dashboard";
import { AdminRoute } from "../components/AdminRoutes";

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
    path: "/login",
    element: <Login />,
  },
]);

export default router;
