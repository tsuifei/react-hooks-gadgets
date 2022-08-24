import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Memo from "./pages/Memo";
import App from "./App";

import { BrowserRouter } from "react-router-dom";// import ExchangeConverter from "./pages/ExchangeConverter";
// import Counter from "./pages/Counter";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    {/* <ExchangeConverter />
    <Counter /> */}
    {/* <Memo /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
