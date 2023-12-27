import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/home";
import { StaysPage } from "./pages/stays";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/stays",
    element: <StaysPage />,
  },
]);
