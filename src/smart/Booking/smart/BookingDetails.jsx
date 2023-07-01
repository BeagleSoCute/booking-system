import react, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "contexts/app.context";
import TableData from "components/common/TableData";
import { columnsFood, columnsDrink } from "./tableData";
import BookingForm from "smart/Booking/components/BookingForm";
import { getMyBooking } from "services/booking.service";
import dayjs from "dayjs";
import {Button} from "antd"

const BookingDetails = () => {
  const { user, setLoading } = useContext(AppContext);
  const { orderId } = useParams();
  const [booking, setBooking] = useState();
  useEffect(() => {
    setLoading(true);
    const init = async () => {
      const { success, payload } = await getMyBooking(orderId);
      console.log("payload is", payload);
      if (success) {
        setBooking(payload);
      }
      setLoading(false);
    };
    init();
    console.log("ssuserr", user);
  }, []);
  const bookingFormProps = {
    bookingDetails: {
      adultAmount: booking?.adultAmount,
      babyAmount: booking?.babyAmount,
      dateTime: dayjs(booking?.dateTime),
      specification: booking?.specification,
    },
    isConfirm: false,
    isAdmin: user.role === "admin",
    isSeeDetail: true,
    isEdit: booking && user?.role === "admin" ? true : false,
  };
  return (
    <StyledDiv className="booking-details">
      <div className="flex justify-center items-center space-x-4 mb-5 ">
        <div>
          <p className="">Name: {booking?.user.name}</p>
        </div>
        <div>
          <p>Email: {booking?.user.email}</p>
        </div>
        <div>
          <p>Name: {booking?.user.phoneNumber}</p>
        </div>
      </div>
      <BookingForm {...bookingFormProps} />
      <div className="order-details">
        <h1 className="text-2xl mt-5">Food</h1>
        <TableData
          // data={orderFoodDetails}
          columns={columnsFood()}
        />
        <h1 className="text-2xl mt-5">Drink</h1>
        <TableData
          // data={orderDrinkDetails}
          columns={columnsDrink()}
        />
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  &.booking-details {
  }
`;
export default BookingDetails;
