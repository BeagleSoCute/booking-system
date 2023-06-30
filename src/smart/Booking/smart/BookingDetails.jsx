import react, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "contexts/app.context";
import TableData from "components/common/TableData";
import {columnsFood, columnsDrink} from "./tableData"
import BookingForm from "smart/Booking/components/BookingForm";
import {getMyBooking} from "services/booking.service"
import dayjs from "dayjs"

const BookingDetails = () => {
  const { user,setLoading } = useContext(AppContext);
  const { orderId } = useParams();
  const [booking, setBooking] = useState();
  useEffect(() => {
    setLoading(true)
    const init = async() => {
    const {success, payload} =  await getMyBooking(orderId);
    console.log('payload is', payload)
    if(success){
      setBooking(payload);
    }
    setLoading(false)
    }
    init();
    console.log('ssuserr',user)

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
  const bookingFormProps = {
    bookingDetails: {
      adultAmount: booking?.adultAmount ,
      babyAmount: booking?.babyAmount,
      dateTime: dayjs(booking?.dateTime),
      specification: booking?.specification
    },
    isConfirm: false ,
    isEdit: booking && user?.role === 'admin'? true : false
  }

  return (
    <StyledDiv className="booking-details">
    <BookingForm  {...bookingFormProps}  />
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
