import React, {useState} from "react";
import styled from "styled-components";
import BookingForm from "smart/Booking/components/BookingForm";
import BookingSection from "smart/Booking/components/BookingSection"
import { Button, Checkbox, Form, Input } from "antd";
import { notification } from "helpers/notification.helper";

const Booking = () => {
  const [isConfirm, setIsConfirm] = useState("");

  const handleSubmitBooking = () => {
    setIsConfirm(true);
    notification({
      type: "success",
      message: "Your booking is success",
    });
  }
  return (
    <StyledDiv className="booking">
      <div className="flex justify-center mb-5">
      <h1 className="text-3xl">Select your booking at Im-Aim Thai resturant</h1>

      </div>
      <BookingSection isConfirm={isConfirm} onFinish={handleSubmitBooking}/>
      {/* <BookingForm/> */}
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  &.booking {
  }
`;
export default Booking;
