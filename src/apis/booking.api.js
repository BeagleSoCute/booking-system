import { apiInstance } from "configs/axios.config";

export const addBookingAPI = (data) => apiInstance.post("/booking/add", data);
export const getBookingAPI = (data) => apiInstance.post("/booking/get", data);


