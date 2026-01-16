import { StrictMode } from "react";
import { useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import Register from "./Components/Register/Register.jsx";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute.jsx";

const Main = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const router = createBrowserRouter([
    // {
    //   path: "/",
    //   element: (
    //     <ProtectedRoute user={user}>
    //       <App
    //         token={token}
    //         setToken={setToken}
    //         user={user}
    //         setUser={setUser}
    //       />
    //     </ProtectedRoute>
    //   ),
    // },
    // {
    //   path: "/register",
    //   element: (
    //     <Register
    //       token={token}
    //       setToken={setToken}
    //       user={user}
    //       setUser={setUser}
    //     />
    //   ),
    // },
    {
      path: "/",
      element: (
        <App
        />
      ),
    },
  ]);
  return <RouterProvider router={router} />;
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
