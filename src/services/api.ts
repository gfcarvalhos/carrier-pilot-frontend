import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// antes de cada request, coloca o access token (depois ligamos com o contexto)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access");
  if (token) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

let isRefreshing = false;
let failedQueue: Array<{
  resolve: (value?: unknown) => void;
  reject: (error: unknown) => void;
}> = [];

const processQueue = (error: unknown, token: string | null) => {
  failedQueue.forEach((prom) => {
    if (error || !token) prom.reject(error);
    else prom.resolve(token);
  });
  failedQueue = []
}

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status !== 401 || originalRequest._retry) {
      return Promise.reject(error);
    }

    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        failedQueue.push({
          resolve: () => {
            originalRequest.headers.Authorization = `Bearer ${localStorage.getItem("access")}`;
            resolve(api(originalRequest));
          },
          reject,
        });
      });
    }

    originalRequest._retry = true;
    isRefreshing = true;

    try {
      const refresh = localStorage.getItem("refresh");
      if (!refresh) {
        throw new Error("Sem refresh token");
      }

      const res = await axios.post<{ access: string; refresh: string }>(
        `${import.meta.env.VITE_API_URL}/auth/refresh/`,
        { refresh }
      );

      const { access, refresh: newRefresh } = res.data;

      localStorage.setItem("access", access);
      localStorage.setItem("refresh", newRefresh);

      api.defaults.headers.Authorization = `Bearer ${access}`;
      originalRequest.headers.Authorization = `Bearer ${access}`;

      processQueue(null, access);
      return api(originalRequest);
    } catch (err) {
      processQueue(err, null);
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      return Promise.reject(err);
    } finally {
      isRefreshing = false;
    }
  }
);

