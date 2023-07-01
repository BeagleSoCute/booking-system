import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "antd";
import TableData from "components/common/TableData";
import ManageProductForm from "../components/ManageProductForm";
//import { columnsFood, columnsDrink } from "../tableContent";
import { columnsFood, columnsMeat } from "../tableContent";
import { addProduct } from "services/product.service";
import { v4 as uuidv4 } from "uuid";
import { notification } from "helpers/notification.helper";

const ProductPage = () => {
  const [selectOrder, setSelectOrder] = useState("");
  const [foodLists, setFoodLists] = useState([]);
  const [meatLists, setMeatLists] = useState([]);
  const [drinkLists, setDrinkLists] = useState([]);

  const handleDeleteFood = (data) => {
    const id = data.id;
    const result = foodLists.filter((item) => item.id !== id);
    setFoodLists(result);
  };

  const handleDeleteMeat = (data) => {
    const id = data.id;
    const result = meatLists.filter((item) => item.id !== id);
    setMeatLists(result);
  };

  const handleDeleteDrink = (data) => {
    const id = data.id;
    const result = drinkLists.filter((item) => item.id !== id);
    setDrinkLists(result);
  };

  const handleSubmit = (value) => {
    const id = uuidv4();
    const transformData = {
      ...value,
      id,
    };
    console.log("value", value);
    if (selectOrder === "food") {
      setFoodLists([...foodLists, transformData]);
    } else if (selectOrder === "meat") {
      setMeatLists([...meatLists, transformData]);
    } else {
      setDrinkLists([...drinkLists, transformData]);
    }
  };

  const handleAddProducts = async () => {
    console.log('handleAddProducts')
    const data = { food: foodLists, drink: drinkLists, meat: meatLists };
    console.log('kuttt',data)
    const {success} = await addProduct(data);
    if(success){
      notification({
        type: "success",
        message: "Update product success",
      });
    }else{
      notification({
        type: "Adding products fail",
        message: "Please contact admin!",
      });
    }
 
  };

  return (
    <StyledDiv className="product-page">
      <div className="flex justify-center mt-20 cursor-pointer mb-5">
        <div
          onClick={() => setSelectOrder("food")}
          className="flex justify-end items-end mr-14  "
        >
          <div className="inline-flex p-1 border border-gray-500 ">
            <ion-icon
              style={{ color: selectOrder === "food" ? "orange" : "gray" }}
              name="fast-food-outline"
            ></ion-icon>
          </div>
        </div>
        <div
          onClick={() => setSelectOrder("meat")}
          className="flex justify-end items-end mr-14  "
        >
          <div className="inline-flex p-1 border border-gray-500 ">
            <ion-icon
              style={{ color: selectOrder === "meat" ? "orange" : "gray" }}
              name="pizza-outline"
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
      <ManageProductForm onFinish={handleSubmit} selectOrder={selectOrder} />
      <h1>Food Lists </h1>
      <TableData data={foodLists} columns={columnsFood(handleDeleteFood)} />
      <h1>Meat Lists </h1>
      <TableData data={meatLists} columns={columnsMeat(handleDeleteMeat)} />
      <h1>Drink Lists </h1>
      <TableData data={drinkLists} columns={columnsFood(handleDeleteDrink)} />
      <div className="flex justify-center pb-20 ">
        <Button disabled={foodLists.length === 0 || drinkLists.length === 0 || meatLists.length === 0 ? true : false } onClick={() => handleAddProducts()}>Submit Add Product </Button>
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  &.product-page {
    ion-icon {
      font-size: 220px;
    }
  }
`;

export default ProductPage;
