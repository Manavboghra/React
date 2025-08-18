import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import App from "./App.jsx";
import CurrencyConverter from "./components/Content/CurrencyConverter/CurrencyConverter.jsx";
import { CurrencyCalculator } from "./components/Content/CurrencyCalculator/CurrencyCalculator.jsx";
import { ReverseCalculator } from "./components/Content/ReverseCalculator/ReverseCalculator.jsx";
import Home from "./components/Home/Home.jsx";
import { ProductDetail } from "./components/Content/Products/ProductDetail.jsx";
import { ProductList } from "./components/Content/Products/ProductList.jsx";
import { ProductDetailLoader } from "./components/Content/Products/ProductDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
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
      {
        // loader:ProductListLoader,
        path: "products",
        element: <ProductList />,
      },
      {
        loader: ProductDetailLoader,
        path: "/products/:productId",
        element: <ProductDetail />,
      }
      
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />

    {/* <App1/> */}
  </StrictMode>
);
