import { createBrowserRouter } from "react-router-dom";
import { GamePage } from "./pages/GamePage/GamePage";
import { App } from "./App";
import { LeaderbordPage } from "./pages/LeaderbordPage/LeaderbordPage";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/game/:pairsCount",
      element: <GamePage />,
    },
    {
      path: "/leaderbord",
      element: <LeaderbordPage />,
    },
  ],
  /**
   * basename нужен для корректной работы в gh pages
   * он же указан в homepage package.json и в index.html
   */
  { basename: "/react-memo" },
);
