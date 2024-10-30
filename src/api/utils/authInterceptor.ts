import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import { tokenRefresher } from "./tokenRefresher";
import { credentials } from "services/credentials";

export const applyAuthInterceptors = (axiosInstance: AxiosInstance) => {
  const requestOnFulfilled = async (config: InternalAxiosRequestConfig) => {
    // Ожидание окончания обновления токена, если оно выполняется
    if (tokenRefresher.getIsRefreshing()) {
      await tokenRefresher.getRefreshPromise();
    }

    // Добавление токена в заголовок запроса, если он есть
    const accessToken = credentials.get()?.accessToken;
    if (accessToken) {
      config.headers.set("Authorization", `Bearer ${accessToken}`);
    }

    return config;
  };

  const responseOnRejected = async (error: unknown) => {
    // Обработка ошибки 401 Unauthorized
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      const refreshToken = credentials.get()?.refreshToken;
      if (!refreshToken) {
        credentials.delete();
        return Promise.reject(error);
      }

      // Попытка обновления токена
      const authResponse = await tokenRefresher.refresh(refreshToken);

      // Если обновление не удалось, очистить данные и отклонить запрос
      if (!authResponse) {
        credentials.delete();
        return Promise.reject(error);
      }

      // Сохранение новых данных
      credentials.set(authResponse);

      // Повторный запрос, если конфигурация error.config существует
      if (error.config) {
        return axiosInstance(error.config);
      }
    }

    // Отклонение с исходной ошибкой, если это не 401
    return Promise.reject(error);
  };

  axiosInstance.interceptors.request.use(requestOnFulfilled);
  axiosInstance.interceptors.response.use(null, responseOnRejected);
};
