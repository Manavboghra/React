import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App1 from "./App1.jsx";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import App from "./App.jsx";
import CurrencyConverter from "./components/Content/CurrencyConverter/CurrencyConverter.jsx";
import { CurrencyCalculator } from "./components/Content/CurrencyCalculator/CurrencyCalculator.jsx";
import { ReverseCalculator } from "./components/Content/ReverseCalculator/ReverseCalculator.jsx";
import Home from "./components/Home/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: "Home",
        element: <Home />,
      },
      {
        path: "CurrencyConverter",
        element: <CurrencyConverter />,
      },
      {
        path: "Denominator",
        element: <CurrencyCalculator />,
      },
      {
        path: "Reverse",
        element: <ReverseCalculator />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />

    {/* <App1/> */}
  </StrictMode>
);
