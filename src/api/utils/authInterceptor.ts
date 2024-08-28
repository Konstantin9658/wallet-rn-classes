import axios, {AxiosInstance, InternalAxiosRequestConfig} from "axios";
import {tokenRefresher} from "./tokenRefresher";
import {credentials} from "services/credentials";

export const applyAuthInterceptors = (axiosInstance: AxiosInstance) => {
  const requestOnFulfilled = async (config: InternalAxiosRequestConfig) => {
    // Wait until token refreshing is finished (if needed)
    if (tokenRefresher.getIsRefreshing()) {
      await tokenRefresher.getRefreshPromise();
    }

    // Add the auth token to request headers if it exists
    const accessToken = credentials.get()?.accessToken;
    if (accessToken) {
      config.headers.set("Authorization", `Bearer ${accessToken}`);
    }

    return config;
  };

  const responseOnRejected = async (error: unknown) => {
    // Check if the error is 401 Unauthorized
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      credentials.delete();
      return Promise.reject(error);
    }

    // // Check if the refresh token exists
    // const token = credentials.get()?.refreshToken;
    // if (!token) {
    //   return Promise.reject(error);
    // }

    // // Check if the token has been refreshed successfully
    // const authResponse = await tokenRefresher.refresh(token);
    // if (!authResponse) {
    //   credentials.delete();
    //   return Promise.reject(error);
    // }

    // // Save new credentials
    // credentials.set(authResponse);

    // // Check if information about the initial request exists
    // if (!error.config) {
    //   return Promise.reject(error);
    // }

    // // Repeat initial request
    // return axiosInstance(error.config);
  };

  axiosInstance.interceptors.request.use(requestOnFulfilled);
  axiosInstance.interceptors.response.use(null, responseOnRejected);
};
