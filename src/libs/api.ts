import axios from "axios";
import storage from "./storage";
import { useStore } from "../store";

const BASE_URL = "http://inmarserv-api.daylink.in";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = storage.getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  const { setIsLoading } = useStore.getState();
  setIsLoading(true);

  return config;
});

api.interceptors.response.use(
  (response) => {
    const { setIsLoading } = useStore.getState();
    setIsLoading(false);
    return response;
  },
  (error) => {
    const { setIsLoading } = useStore.getState();
    setIsLoading(false);
    return Promise.reject(error);
  }
);

export default api;
