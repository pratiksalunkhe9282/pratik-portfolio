import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/global.css";

try {
  document.documentElement.dataset.theme =
    window.localStorage.getItem("portfolio-theme") === "light" ? "light" : "dark";
} catch {
  document.documentElement.dataset.theme = "dark";
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
