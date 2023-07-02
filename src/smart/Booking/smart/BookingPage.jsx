import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BookingSection from "smart/Booking/components/BookingSection";
import { notification } from "helpers/notification.helper";
import { addBooking } from "services/booking.service";

const Booking = () => {
  const [isConfirm, setIsConfirm] = useState("");
  const navigate = useNavigate();
  const handleSubmitBooking = async(value) => {
    if (isConfirm) {
      navigate("/dashboard");
      return;
    }
    const success = await addBooking(value);
    if(success){
      setIsConfirm(true);
      notification({
        type: "success",
        message: "Your booking is success",
      });
    }else{
      setIsConfirm(false);
      notification({
        type: "error",
        message: "Fail to arrange your booking, please contact us via phone number!",
      });
    }
  };
  return (
    <StyledDiv className="booking">
      <div className="flex justify-center mb-5">
        <h1 className="text-3xl">
          Select your booking at Im-Aim Thai resturant
        </h1>
      </div>
      <BookingSection isConfirm={isConfirm} onFinish={handleSubmitBooking} />
      {/* <BookingForm/> */}
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  &.booking {
  }
`;
export default Booking;
