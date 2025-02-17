import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { createHashRouter } from "react-router-dom";
// import { App } from "./App";
import DropZone from "./DropZone.jsx";

const router = createHashRouter([
  {
    path: "*",
    element: <DropZone />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
