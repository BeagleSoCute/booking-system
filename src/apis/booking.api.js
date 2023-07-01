import { apiInstance } from "configs/axios.config";

export const addBookingAPI = (data) => apiInstance.post("/booking/add", data);
export const getBookingAPI = () => apiInstance.get("/booking/get");
export const getBookingByIdAPI = (orderId) => apiInstance.get(`/booking/getById/${orderId}`);

