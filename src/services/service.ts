import axios from "axios";
import { decryptData, encryptData } from "../utils/crypto";
import toast from "react-hot-toast";


const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_BASE_URL,

  headers: {
    "Content-Type": "application/json",
    "x-encrypted": "true",
  },
});

let isRefreshing = false;

let failedQueue: Array<{
  resolve: (token: string) => void;
  reject: (error: unknown) => void;
}> = [];

const processQueue = (
  error: unknown,
  token: string | null = null
) => {
  failedQueue.forEach((promise) => {
    if (error) {
      promise.reject(error);
    } else {
      promise.resolve(token!);
    }
  });

  failedQueue = [];
};

api.interceptors.request.use(
  (config) => {
    const token =
      localStorage.getItem("access_token");
    console.log(
      "TOKEN",
      token
    );
    if (token) {
      config.headers.Authorization =
        `Bearer ${JSON.parse(token)}`;
    }

    /*
      Encrypt Request Data
    */

    // if (config.data) {
    //   config.data = {
    //     payload: encryptData(config.data),
    //   };
    // }
    if (
      config.data &&
      !(config.data instanceof FormData)
    ) {
      config.data = {
        payload:
          encryptData(
            config.data
          ),
      };
    }

    return config;
  },

  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => {

    /*
      Decrypt Response Data
    */

    if (response.data?.payload) {
      response.data = decryptData(
        response.data.payload
      );
    }
    console.log("response", response)
    return response;
  },

  async (error) => {
    const originalRequest =
      error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry
    ) {
      if (isRefreshing) {
        return new Promise(
          (resolve, reject) => {
            failedQueue.push({
              resolve,
              reject,
            });
          }
        ).then((token) => {
          originalRequest.headers.Authorization =
            `Bearer ${token}`;

          return api(originalRequest);
        });
      }

      originalRequest._retry = true;

      isRefreshing = true;

      try {
        const refreshToken =
          localStorage.getItem(
            "refresh_token"
          );

        const response =
          await axios.post(
            `${import.meta.env.VITE_API_BASE_URL}/auth/refresh-token`,
            {
              refreshToken,
            }
          );

        const newAccessToken =
          response.data.data.accessToken;

        localStorage.setItem(
          "access_token",
          newAccessToken
        );

        processQueue(
          null,
          newAccessToken
        );

        originalRequest.headers.Authorization =
          `Bearer ${newAccessToken}`;

        return api(originalRequest);

      } catch (err) {

        processQueue(err, null);

        localStorage.clear();

        window.location.href =
          "/login";

        return Promise.reject(err);

      } finally {

        isRefreshing = false;

      }
    }
    if (
      error.response?.data?.message &&
      !originalRequest?.suppressToast
    ) {
      toast.error(error.response.data.message);
    }
    console.log("error", error.response.data.message)
    return Promise.reject(error);
  }
);

export default api;