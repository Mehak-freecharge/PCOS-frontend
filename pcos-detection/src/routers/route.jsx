import { createBrowserRouter } from "react-router-dom";
import Signup from "../components/Signup";
import App from "../App";
import Home from "../home/Home";

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
    ],
  },
]);

export default router;
