import React from "react";
import ReactDOM from "react-dom";
import { getToken } from "./Components/utils/Common";
import App from "./App";

import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";

//AXIOS GLOBAL CONFIG
axios.defaults.baseURL = "http://localhost:8000/api";
axios.defaults.headers.common["Authorization"] = `Bearer ${getToken()}`;
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);
