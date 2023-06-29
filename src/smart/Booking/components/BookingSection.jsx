import React, { Fragment } from "react";
import styled from "styled-components";
import { Form } from "antd";
import BookingForm from "smart/Booking/components/BookingForm";
import AlertMessage from "components/common/AlertMessage";

const BookingSection = ({ isConfirm, onFinish }) => {
  const [form] = Form.useForm();
  const handleSubmit = (value) => {
    onFinish(value);
  };

  return (
    <StyledDiv className="booking-section">
      <BookingForm form={form} isConfirm={isConfirm} onFinish={handleSubmit} />
      {isConfirm && (
        <Fragment>
          <AlertMessage
            type="success"
            message="Your booking is saved into the system, Now you can make an order "
          />
        </Fragment>
      )}
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  &.booking-section {
  }
`;

export default BookingSection;
