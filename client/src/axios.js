import axios from "axios";

export const makeReq = axios.create({
  baseURL: "http://localhost:8800/api/",
  withCredentials: true
});