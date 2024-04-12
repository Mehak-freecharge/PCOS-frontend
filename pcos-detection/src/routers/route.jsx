import { createBrowserRouter } from "react-router-dom";
import Signup from "../components/Signup";
import App from "../App";
import Home from "../home/Home";
import Signin from "../components/Signin";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Form from "../components/Form";

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
      {
        path: "/form",
        element: (
          <PrivateRoute>
            <Form />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
