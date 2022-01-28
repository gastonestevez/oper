import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Register from "./pages/Register";
import Tracker from "./pages/Tracker";
import { Operations } from "./pages/Operations";

ReactDOM.render(
  <React.StrictMode>
    {/* <Register /> */}
    <Operations />
  </React.StrictMode>,
  document.getElementById("root")
);
