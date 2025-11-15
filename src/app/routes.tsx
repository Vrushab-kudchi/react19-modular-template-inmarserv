import { createBrowserRouter } from "react-router-dom";
import Login from "./features/auth/pages/Login";
import PrivateRoutes from "../components/PrivateRoutes";

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
    path: "/login",
    element: <Login />,
  },
]);

export default router;
