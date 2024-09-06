import axios, { AxiosRequestConfig } from "axios";
import { API_BASE_URL } from "config/config";
import { applyAuthInterceptors } from "./authInterceptor";

const axiosInstance = axios.create();
applyAuthInterceptors(axiosInstance);

export const backendRequest = <T>(config: AxiosRequestConfig): Promise<T> => {
  const source = axios.CancelToken.source();
  const promise = axiosInstance({
    ...config,
    baseURL: API_BASE_URL,
    cancelToken: source.token,
    timeout: 60000,
  })
    .then(({ data }) => data)
    .catch(error => {
      if (axios.isAxiosError(error)) {
        return Promise.reject(error);
      }
      return Promise.reject(null);
    });

  Object.assign(promise, {
    cancel: () => {
      source.cancel("Query was cancelled by React Query");
    },
  });

  return promise;
};
