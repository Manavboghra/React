import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ShareContact, {
  CreateContext,
} from "./components/Hooks/Context/CreateContext.jsx";
import { DataContext } from "./components/Hooks/Context/DataContext.jsx";
import { AppTrial } from "./AppTrial.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppTrial />
  </StrictMode>
);
