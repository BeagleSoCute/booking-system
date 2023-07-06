import axios from "axios";
import {
  transformAxiosResponse,
  transformErrorResponse,
} from "helpers/axios.helper";
import { notification } from "helpers/notification.helper";

const apiInstance = axios.create({
  baseURL: process.env.REACT_APP_PRODUCTION === "azure" ? "https://booking-backend-vscode.azurewebsites.net/api" : '/api',
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "x-auth-token": localStorage.getItem("token"),
  },
});

const onRequestFulfilled = (configs = {}) => {
  return configs;
};
const onResponseFulfilled = (response) => {
  return transformAxiosResponse(response);
};

const onResponseRejected = async (error) => {
  const statusError = error.response?.status;
  if (error?.response && statusError === 401) {
    notification({
      type: "warning",
      message: "Please login into the system again.",
    });
    // window.location.href = "/logout";
  }
  return transformErrorResponse(error);
};
apiInstance.interceptors.request.use(onRequestFulfilled);
apiInstance.interceptors.response.use(onResponseFulfilled, onResponseRejected);
export { apiInstance };
