import axios from "axios";
import CONST from "../utils/constants";
import { getToken } from "../utils/helpers";
import { errorHandler, requestHandler, succesHandler } from "./interceptors";

const isDev = process.env.NODE_ENV === "development";

const isLocalDev = (isDev) => {
  let axiosConfig;
  axiosConfig = axios.create();
  if (isDev) {
    const config = {
      // baseURL: CONST.BASE_API,
      baseURL: "https://www.gencer.live",
      headers: {
        "Content-Type": "application/json",
        ...(!!getToken() && { Authorization: `Bearer ${getToken()}` }),
      },
    };
    axiosConfig = axios.create(config);
  }
  return axiosConfig;
};

const axiosInstance = isLocalDev(isDev);

axiosInstance.interceptors.request.use((request) => requestHandler(request));

axiosInstance.interceptors.response.use(
  (response) => succesHandler(response),
  (error) => errorHandler(error)
);

export default axiosInstance;
