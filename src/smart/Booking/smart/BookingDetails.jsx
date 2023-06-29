import react, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "contexts/app.context";
import TableData from "components/common/TableData";
import {columnsFood, columnsDrink} from "./tableData"
import BookingForm from "smart/Booking/components/BookingForm";

const BookingDetails = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState({});
  useEffect(() => {
console.log('useEffect in BookingDetails')
  },[])
  // useEffect(() => {
  //   const init = async () => {
  //     setLoading(true);
  //     //   const { success, details } = await getOrderDetails(userId);
  //   //   if (success) {
  //   //     setOrder(details);
  //   //   }
  //   //   setLoading(false);
  //   //   return;
  //   // };
  //   init();
  //   // eslint-disable-next-line
  // }, []);

  return (
    <StyledDiv className="booking-details">
    <BookingForm  isConfirm={true}  />
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
        {/* <Button className="flex justify-center">Confirm Order</Button> */}
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  &.booking-details {
  }
`;
export default BookingDetails;
