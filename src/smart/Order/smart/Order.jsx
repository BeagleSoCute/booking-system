import React, { useState, Fragment, useId  } from "react";
import styled from "styled-components";
import { Button } from "antd";
import OrderFoodForm from "../components/OrderFoodForm";
import OrderDrinkForm from "../components/OrderDrinkForm";
import TableData from "components/common/TableData";
import {v4 as uuidv4} from 'uuid';
import {columnsFood, columnsDrink} from "../tableContent"

const Order = () => {
    const [selectOrder, setSelectOrder] = useState("");
    const [orderDrinkDetails, setOrderDrinkDetails] = useState([]);
    const [orderFoodDetails, setOrderFoodDetails] = useState([]);
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
        const transformData = {
          ...data,
          amount:data.amount,
          id:uuidv4()
        }
        setOrderFoodDetails([...orderFoodDetails,transformData]);
      };
    
    
      const handleDeleteFood = (data) => {
        const id = data.id 
       const result = orderFoodDetails.filter(item => item.id !== id); 
       setOrderFoodDetails(result);
        }
        
      const handleDeleteDrink = (data) => {
        const id = data.id 
       const result = orderDrinkDetails.filter(item => item.id !== id); 
       setOrderDrinkDetails(result);
        }
      
    

    return <StyledDiv className="order">
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
        <TableData data={orderFoodDetails} columns={columnsFood(handleDeleteFood)} />
        <h1 className="text-2xl mt-5">Order your drink</h1>
        <TableData data={orderDrinkDetails} columns={columnsDrink(handleDeleteDrink)} />
        <Button className="flex justify-center">Confirm Order</Button>
    </StyledDiv>
}

const StyledDiv = styled.div`
  &.order {
    ion-icon {
      font-size: 220px;
    }
  }
`;

export default Order;
