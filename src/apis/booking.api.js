import { apiInstance } from "configs/axios.config";

export const addBookingAPI = (data) => apiInstance.post("/booking/add", data);
export const getBookingAPI = () => apiInstance.get("/booking/get");
export const getBookingByIdAPI = (orderId) => apiInstance.get(`/booking/getById/${orderId}`);
export const updateOrderBookingAPI = (data) => apiInstance.put("/booking/updateOrder", data);
export const updateBookingAPI = (data) => apiInstance.put("/booking/updateBooking", data);
export const deleteBookingAPI = (bookingId) => apiInstance.delete(`/booking/delete/${bookingId}`);

