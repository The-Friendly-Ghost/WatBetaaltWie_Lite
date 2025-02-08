import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./pages/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="flex justify-center items-center h-screen">
      <App />
    </div>
  </StrictMode>
);
