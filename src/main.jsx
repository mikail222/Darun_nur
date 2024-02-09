import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import ReactGA from "react-ga4";

ReactGA.initialize("G-RD5933L9M5");
ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname,
  title: "Custom Title",
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
