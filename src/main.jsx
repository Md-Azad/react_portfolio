import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./routers/routers.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="w-full md:max-w-7xl mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  </StrictMode>
);
