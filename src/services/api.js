import axios from "axios";
import store from "../store";

const api = axios.create({
  baseURL: "http://localhost:3333/"
});

api.interceptors.request.use(config => {
  const { token } = store.getState().auth;
  const { active: category } = store.getState().category;

  const headers = { ...config.headers };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  if (category) {
    headers.CATEGORY = category.slug;
  }

  return { ...config, headers };
});

export default api;
