import React from "react";
import { Button, Form, Input, Select, InputNumber } from "antd";

const OrderFoodForm = ({ onAdd }) => {
  const [form] = Form.useForm();
  const handleAdd = (value) => {
    form.resetFields();
    onAdd(value);
  };
  return (
    <Form
      form={form}
      className="border border-gray-300 p-5"
      name="basic"
      labelCol={{ span: 24 }}
      onFinish={handleAdd}
      autoComplete="off"
    >
      <div className="flex justify-center items-center space-x-4">
        <Form.Item
          label="Food"
          name="food"
          style={{ width: "150px" }}
          rules={[{ required: true, message: "" }]}
        >
          <Select
            className="w-full"
            style={{ width: "100%" }}
            // onChange={handleChange}
            options={[
              {
                value: "Pad Thai",
                label: "Pad Thai",
              },
              {
                value: "Fried Rice",
                label: "Fried Rice",
              },
              {
                value: "Tomyum",
                label: "Tomyum",
              },
              {
                value: "Green Curry",
                label: "Green Curry",
              },
            ]}
          />
        </Form.Item>
        <Form.Item
          label="Choice of Meat"
          name="choiceOfMeat"
          style={{ width: "150px" }}
          rules={[{ required: true, message: "" }]}
        >
          <Select
            className="w-full"
            //onChange={handleChange}
            options={[
              {
                value: "Chicken",
                label: "Chicken",
              },
              {
                value: "Pork",
                label: "Pork",
              },
              {
                value: "Beef",
                label: "Beef",
              },
              {
                value: "Tofu",
                label: "Tofu",
              },
            ]}
          />
        </Form.Item>
        <Form.Item
          label="Amount"
          name="amount"
          rules={[{ required: true, message: "" }]}
        >
          <InputNumber className="w-full" />
        </Form.Item>
        <Form.Item label="Specification" name="specification">
          <Input.TextArea className="w-full" />
        </Form.Item>
      </div>
      <Form.Item colon={false} className="flex justify-center">
        <Button className="w-64" htmlType="submit">
          Add
        </Button>
      </Form.Item>
    </Form>
  );
};

export default OrderFoodForm;