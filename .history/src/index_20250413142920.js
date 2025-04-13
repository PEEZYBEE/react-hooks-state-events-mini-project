// src/index.js
import React from "react";
import ReactDOM from "react-dom"; // Use react-dom instead of react-dom/client
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);