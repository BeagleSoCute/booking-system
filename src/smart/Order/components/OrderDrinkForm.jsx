import React from "react";
import { Button, Form, Input, Select, InputNumber } from "antd";

const OrderDrinkForm = ({options, onAdd}) => {
  const [form] = Form.useForm();
  const handleAdd = (value) => {
    form.resetFields();
    onAdd(value)
  }
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
          label="Drink"
          name="drink"
          style={{ width: "150px" }}
          rules={[{ required: true, message: "" }]}
        >
          <Select
            className="w-full"
            options={options}
          />
        </Form.Item>
        <Form.Item label="Amount" name="amount"           rules={[{ required: true, message: "" }]}
>
          <InputNumber className="w-full" />
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

export default OrderDrinkForm;
