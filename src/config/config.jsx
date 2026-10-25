import axios from 'axios'
export const api = axios.create(
    {
        baseURL:"https://team-sync-backend-n78w.onrender.com/api",
        withCredentials:true,
    }
);

export const api1 = axios.create(
  {
  baseURL:"https://dummyjson.com/",
}
);


api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalReq = error.config;

    if (
      error.response?.status === 401 &&
      originalReq &&
      !originalReq.retry &&
      !originalReq.url?.includes("/auth/get-accessToken")
    ) {
      originalReq.retry = true;

      try {
        await api.get("/auth/get-accessToken");
        return api(originalReq);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

