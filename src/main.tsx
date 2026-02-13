import { createRoot } from "react-dom/client";
import App from "./App";
import "./i18n";        // ✅ initialize translations
import "./index.css";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}

createRoot(root).render(<App />);
