// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

console.log("Rendering App with ReactDOM:", ReactDOM);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);