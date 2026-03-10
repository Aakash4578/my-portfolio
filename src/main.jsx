import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter  } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";

// Theme functions
import { loadTheme } from "./Website/utils/theme.js";

// Load saved theme on startup
loadTheme();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);