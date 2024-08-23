import axios, { AxiosRequestConfig } from 'axios';

const axiosInstance = axios.create();

export const backendRequest = <T>(config: AxiosRequestConfig): Promise<T> => {
  const source = axios.CancelToken.source();
  const promise = axiosInstance({
    ...config,
    baseURL: 'https://dev-hub-api.mercdev.com/api',
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
      source.cancel('Query was cancelled by React Query');
    },
  });

  return promise;
};
