import { getToken } from "../utils/helpers";

export const isHandlerEnabled = (config = {}) => {
  return config.hasOwnProperty("handlerEnabled") && !config.isHandlerEnabled
    ? false
    : true;
};

export const requestHandler = (config) => {
  if (isHandlerEnabled(config)) {
    const auth = getToken();
    if (auth) {
      config.headers["Authorization"] = `Bearer ${auth}`;
    }
  }
  return config;
};

export const succesHandler = (response) => {
  if (isHandlerEnabled(response)) {
  }
  return response;
};

export const errorHandler = (error) => {
  if (isHandlerEnabled(error.config)) {
  }
  return Promise.reject({ ...error });
};
