import { StyledEngineProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StyledEngineProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    ,
  </StyledEngineProvider>
);
