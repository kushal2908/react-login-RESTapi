import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";

//AXIOS GLOBAL CONFIG
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);
