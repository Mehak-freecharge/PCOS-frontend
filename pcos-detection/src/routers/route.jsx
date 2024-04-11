import { createBrowserRouter } from "react-router-dom";
import Signup from "../components/Signup";
import App from "../App";
import Home from "../home/Home";
import Signin from "../components/Signin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Signin />,
      },
    ],
  },
]);

export default router;
