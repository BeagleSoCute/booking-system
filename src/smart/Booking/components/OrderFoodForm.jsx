import React from "react";
import styled from "styled-components";
import { Button, Form, Input, Select, InputNumber } from "antd";

const OrderForm = () => {
  const [form] = Form.useForm();
  return (
    <Form
      form={form}
      className="border border-gray-300 p-5"
      name="basic"
      labelCol={{ span: 24 }}
      //  initialValues={{ remember: true }}
      // onFinish={onFinish}
      autoComplete="off"
    >
      <div className="flex justify-center items-center space-x-4">
        <Form.Item
          label="Food"
          name="dish"
          rules={[{ required: true, message: "" }]}
        >
          <Select
            style={{
              width: 120,
            }}
            //   onChange={handleChange}
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
          rules={[{ required: true, message: "" }]}
        >
          <Select
            style={{
              width: 120,
            }}
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
        <Form.Item label="Specification" name="specification">
          <Input.TextArea className="w-full" />
        </Form.Item>
      </div>
      <Form.Item colon={false} className="flex justify-center ">
        <Button className="w-64" htmlType="submit">
          Add
        </Button>
      </Form.Item>
    </Form>
  );
};

export default OrderForm;
