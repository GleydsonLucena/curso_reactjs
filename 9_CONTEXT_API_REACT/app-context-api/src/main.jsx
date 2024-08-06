import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import { TittleColorContextProvider } from "./context/TittleColorContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TittleColorContextProvider>
      <App />
    </TittleColorContextProvider>
  </React.StrictMode>
);
