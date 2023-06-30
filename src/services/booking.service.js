import { addBookingAPI, getBookingAPI, getBookingByIdAPI } from "../apis/booking.api";
import dayjs from "dayjs"

export const addBooking = async (data) => {
    const transformData = {
        ...data,
        dateTime: dayjs(data.dateTime).format("DD-MM-YYYY HH:mm")
    }
  const res = await addBookingAPI(transformData);
  if (res.success) {
    return true;
  } else {
    return false;
  }
};

export const getBooking = async () => {
  const { success, payload } = await getBookingAPI();
  console.log('payload from getbooking is ', payload)
    return { success, payload };
 
};

export const getMyBooking = async (orderId) => {
  console.log('orderId',orderId)
  const { success, payload } = await getBookingByIdAPI(orderId);
  console.log('success',payload)
    return { success, payload };

}
