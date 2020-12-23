import axios from "axios";
import { getToken } from "./Components/utils/Common";
const httpGeneral = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});
const httpLogin = axios.create({
  baseURL: "http://localhost:8000/api",
});
export { httpGeneral, httpLogin };
