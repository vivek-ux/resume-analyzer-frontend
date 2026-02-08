import axios from "axios";

export const API = axios.create({
  baseURL: "https://web-production-f2599.up.railway.app",
});

export const setAuthToken = (token) => {
  API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
