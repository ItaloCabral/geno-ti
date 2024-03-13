import { env as apiUrl } from "@/lib/env";
import axios from "axios";

const AxiosClient = axios.create({
  baseURL: apiUrl ?? "http://localhost:3000",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default AxiosClient;
