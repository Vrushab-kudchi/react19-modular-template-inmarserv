import { createBrowserRouter } from "react-router-dom";
import Login from "./features/auth/pages/Login";
import PrivateRoutes from "../components/PrivateRoutes";
import Dashboard from "./features/admin-dashboard/pages/Dashboard";

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
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
