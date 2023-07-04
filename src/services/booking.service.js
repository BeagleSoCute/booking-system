import {
  addBookingAPI,
  getBookingAPI,
  getBookingByIdAPI,
  updateOrderBookingAPI,
  updateBookingAPI,
  deleteBookingAPI
} from "../apis/booking.api";
import dayjs from "dayjs";

export const addBooking = async (data) => {
  const transformData = {
    ...data,
    dateTime: dayjs(data.dateTime).format("DD/MM/YYYY HH:mm"),
  };
  const res = await addBookingAPI(transformData);
  if (res.success) {
    return true;
  } else {
    return false;
  }
};

export const getBooking = async () => {
  const { success, payload } = await getBookingAPI();
  // const res = await axios.get('https://booking-backend-vscode.azurewebsites.net/api/booking/get')
  // console.log('----',res)
  return { success, payload };
};

export const getMyBooking = async (orderId) => {
  const { success, payload } = await getBookingByIdAPI(orderId);
  return { success, payload };
};

export const updateOrderBooking = async (bookingId, data) => {
  const thisData = {
    ...data,
    bookingId,
  };
  const { success } = await updateOrderBookingAPI(thisData);
  return { success };
};

export const updateBooking = async (data) => {
  const transformData = {
    ...data,
    dateTime: dayjs(data.dateTime).format("DD/MM/YYYY HH:mm"),
  };
  const { success } = await updateBookingAPI(transformData);
  return { success };
};

export const deleteBooking = async (bookingId) => {
  const { success } = await deleteBookingAPI(bookingId);
  return { success };
};