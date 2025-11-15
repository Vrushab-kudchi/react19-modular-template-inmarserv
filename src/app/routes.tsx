import { createBrowserRouter } from "react-router-dom";
import Login from "./features/auth/pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
