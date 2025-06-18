import "./index.css";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ErrorPage from "./pages/ErrorPage.jsx";
import { Home } from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contacto from "./pages/Contacto.jsx";
import PropertyDetail from "./pages/PropertyDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contacto",
        element: <Contacto />,
      },
      {
        path: "propiedades/:slugId", // <-- NUEVA RUTA
        element: <PropertyDetail />,
      },
    ],
  },
  {
    path: "/login",
    element: <h1>login</h1>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
