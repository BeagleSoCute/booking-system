import React, { useState, Fragment } from "react";
import styled from "styled-components";
import { Button, Form, Input, DatePicker, InputNumber, Row, Col } from "antd";
import BookingForm from "smart/Booking/components/BookingForm";
import AlertMessage from "components/common/AlertMessage";
import OrderFoodForm from "./OrderFoodForm";

const BookingSection = ({ isConfirm, onFinish }) => {
  const [form] = Form.useForm();
  const [selectOrder, setSelectOrder] = useState("");
  const handleSubmit = () => {
    onFinish();
  };
  return (
    <StyledDiv className="booking-section">
      <BookingForm form={form} onFinish={handleSubmit} />
      {isConfirm && (
        <AlertMessage
          type="success"
          message="Your booking is saved into the system"
        />
      )}
      <Fragment>
        <h1 className="text-center text-2xl mt-5">
          You can order now and your order will be cooked once you arrive to our
          resturant
        </h1>
        <div className="flex justify-center mt-20 cursor-pointer">
          <div
            onClick={() => setSelectOrder("food")}
            className="flex justify-end items-end mr-14 "
          >
            <div className="inline-flex p-1 border border-gray-500 ">
              <ion-icon
                style={{ color: selectOrder === "food" ? "orange" : "gray" }}
                name="fast-food-outline"
              ></ion-icon>
            </div>
          </div>
          <div
            onClick={() => setSelectOrder("drink")}
            className="inline-flex p-1 border border-gray-500 cursor-pointer"
          >
            <ion-icon
              style={{ color: selectOrder === "drink" ? "orange" : "gray" }}
              name="beer-outline"
            ></ion-icon>
          </div>
        </div>
       < OrderFoodForm/>
      </Fragment>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  &.booking-section {
    ion-icon {
      font-size: 220px;
    }
  }
`;

export default BookingSection;
