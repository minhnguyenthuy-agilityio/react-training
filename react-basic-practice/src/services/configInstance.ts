import axios from "axios";
import { API_BASE_URL } from "@/constants";

// Create instance and define base url
export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 3000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
