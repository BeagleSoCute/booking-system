import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "contexts/app.context";
import TableData from "components/common/TableData";
import { columnsFood, columnsDrink } from "./tableData";
import BookingForm from "smart/Booking/components/BookingForm";
import {
  getMyBooking,
  updateBooking,
  deleteBooking,
} from "services/booking.service";
import dayjs from "dayjs";
import { Button } from "antd";
import { notification } from "helpers/notification.helper";

const BookingDetails = () => {
  const { user, setOrder } = useContext(AppContext);
  const navigate = useNavigate();
  const { bookingId } = useParams();
  const [booking, setBooking] = useState();
  useEffect(() => {
    const init = async () => {
      const { success, payload } = await getMyBooking(bookingId);
      if (success) {
        setBooking(payload);
      }
    };
    init();
    // eslint-disable-next-line
  }, []);
  const handleUpdateBooking = async (data) => {
    const addIdData = {
      ...data,
      bookingId,
    };
    const success = await updateBooking(addIdData);
    if (success) {
      notification({
        type: "success",
        message: "Update booking successfully",
      });
    } else {
      notification({
        type: "error",
        message: "Can not update this booking, Please contact admin!",
      });
    }
  };
  const handleDeleteBooking = async () => {
    const success = await deleteBooking(bookingId);
    if (success) {
      notification({
        type: "success",
        message: "Delete booking successfully",
      });
      navigate("/dashboard");
    } else {
      notification({
        type: "error",
        message: "Can not delete this booking, Please contact admin!",
      });
    }
  };
  const bookingFormProps = {
    bookingDetails: {
      adultAmount: booking?.adultAmount,
      babyAmount: booking?.babyAmount,
      dateTime: dayjs(booking?.dateTime, "DD/MM/YYYY HH:mm"),
      specification: booking?.specification,
    },
    isConfirm: false,
    isAdmin: user.role === "admin",
    isSeeDetail: true,
    isEdit: booking && user?.role === "admin" ? true : false,
    onUpdate: handleUpdateBooking,
    onDelete: handleDeleteBooking,
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
      <div className="flex justify-center mt-10 ">
        <Button
          onClick={() => {
            setOrder(booking?.order);
            navigate(`/order/${bookingId}`);
          }}
          className="w-64"
        >
          Manage order
        </Button>
      </div>
      <div className="order-details">
        <h1 className="text-2xl mt-5">Food</h1>
        <TableData columns={columnsFood()} data={booking?.order.food} />
        <h1 className="text-2xl mt-5">Drink</h1>
        <TableData columns={columnsDrink()} data={booking?.order.drink} />
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  &.booking-details {
  }
`;
export default BookingDetails;
