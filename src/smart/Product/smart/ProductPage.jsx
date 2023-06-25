import React, { Fragment } from "react";
import styled from "styled-components";
import { Form } from "antd";
import BookingForm from "smart/Booking/components/BookingForm";
import AlertMessage from "components/common/AlertMessage";
import TableData from "components/common/TableData";
import { columnsFood, columnsDrink } from "../tableContent";

const ProductPage = () => {
  const handleDeleteFood = (data) => {
    const id = data.id;
    const result = orderFoodDetails.filter((item) => item.id !== id);
    setOrderFoodDetails(result);
  };

  const handleDeleteDrink = (data) => {
    const id = data.id;
    const result = orderDrinkDetails.filter((item) => item.id !== id);
    setOrderDrinkDetails(result);
  };

  return (
    <StyledDiv className="product-page">
      <h1>Food Lists </h1>
      <TableData
        // data={orderFoodDetails}
        // columns={columnsFood(handleDeleteFood)}
      />
      <h1>Drink Lists </h1>
      <TableData
        // data={orderFoodDetails}
        // columns={columnsFood(handleDeleteFood)}
      />
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  &.product-page {
  }
`;

export default ProductPage;
