import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { LevelProvider } from "./context/levelContext/levelContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LevelProvider>
      <RouterProvider router={router}></RouterProvider>
    </LevelProvider>
  </React.StrictMode>,
);
