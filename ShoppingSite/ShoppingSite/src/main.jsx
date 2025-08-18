import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";
import { ProductList } from "./pages/Content/ProductList.jsx";
import {
  ProductDetail,
  ProductDetailLoader,
} from "./pages/Content/ProductDetail.jsx";
import { Layout } from "../src/components/layout/Layout.jsx";
import { Home } from "../src/pages/Home/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "men",
        element: <ProductList />,
      },
      {
        loader: ProductDetailLoader,
        path: "/mens/:productId",
        element: <ProductDetail />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <App />
  </StrictMode>
);
