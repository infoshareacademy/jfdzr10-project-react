import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { LoginContextProvider } from "./contexts/LoginContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoginContextProvider>
      <App />
    </LoginContextProvider>
  </React.StrictMode>
);

