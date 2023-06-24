import React, { useState, Fragment, useId  } from "react";
import styled from "styled-components";
import { Button, Form } from "antd";
import BookingForm from "smart/Booking/components/BookingForm";
import AlertMessage from "components/common/AlertMessage";
import OrderFoodForm from "./OrderFoodForm";
import OrderDrinkForm from "./OrderDrinkForm";
import TableData from "components/common/TableData";
import {v4 as uuidv4} from 'uuid';
import { DeleteOutlined } from '@ant-design/icons';



const BookingSection = ({ isConfirm, onFinish }) => {
  const [form] = Form.useForm();
  const [selectOrder, setSelectOrder] = useState("");
  const [orderDrinkDetails, setOrderDrinkDetails] = useState([]);
  const [orderFoodDetails, setOrderFoodDetails] = useState([]);

  const handleSubmit = () => {
    onFinish();
  };
  const handleAddOrderDrink = (data) => {
    console.log('data on handleAddOrder',data);
    console.log('orderDetails',orderDrinkDetails);
    const transformData = {
      ...data,
      id:uuidv4()
    }
    setOrderDrinkDetails([...orderDrinkDetails,transformData]);
  };
  const handleAddOrderFood = (data) => {
    console.log('data on handleAddOrder',data);
    console.log('orderDetails',orderFoodDetails);
    console.log('orderDetails',orderFoodDetails);
    const transformData = {
      ...data,
      amount:data.amount,
      id:uuidv4()
    }
    setOrderFoodDetails([...orderFoodDetails,transformData]);
  };


  const handleDeleteFood = (data) => {
    console.log('data',data)
    const id = data.id 
   const result = orderFoodDetails.filter(item => item.id !== id); 
   setOrderFoodDetails(result);
    }
  
  
  const columnsFood = [
    {
      title: 'Food',
      dataIndex: 'food',
      key: 'food',
    },
    {
      title: 'Choice of meat',
      dataIndex: 'choiceOfMeat',
      key: 'choiceOfMeat',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    }, 
    {
      title: 'Specification',
      dataIndex: 'specification',
      key: 'specification',
    }, 
    {
      title: 'Delete',
      key: 'actions',
      render: (text, record) => (
        <Button
          type="link"
          icon={<DeleteOutlined />}
          onClick={() => handleDeleteFood(record)}
        >
          Delete
        </Button>
      ),
  
    }, 
  ];
  
  const columnsDrink = [
    {
      title: 'Drink',
      dataIndex: 'drink',
      key: 'food',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    }, 
    {
      title: 'Specification',
      dataIndex: 'specification',
      key: 'specification',
    }, 
    {
      title: 'Delete',
      key: 'actions',
      render: (text, record) => (
        <Button
          type="link"
          icon={<DeleteOutlined />}
          onClick={() => this.handleDelete(record)}
        >
          Delete
        </Button>
      ),
  
    }, 
  ];

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
        {selectOrder === "food" ? <OrderFoodForm onAdd={handleAddOrderFood} /> : selectOrder === "drink" ? <OrderDrinkForm  onAdd={handleAddOrderDrink}/>: null}
        <h1 className="text-2xl mt-5">Order your food</h1>
        <TableData data={orderFoodDetails} columns={columnsFood} />
        <h1 className="text-2xl mt-5">Order your drink</h1>
        <TableData data={orderDrinkDetails} columns={columnsDrink} />
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
