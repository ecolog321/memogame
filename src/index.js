import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { LevelContext } from "./context/levelContext/levelContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LevelContext.Provider>
      <RouterProvider router={router}></RouterProvider>
    </LevelContext.Provider>
  </React.StrictMode>,
);
