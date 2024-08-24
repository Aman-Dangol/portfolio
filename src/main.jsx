import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Services from "./components/Services.jsx";
import "./css_modules/global.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => "home",
  },
  {
    path: "/services",
    element: <Services />,
    loader: () => "services",
  },
  {
    path: "/projects",
    element: <App></App>,
    loader: () => "projects",
  },
]);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  // </StrictMode>
);
