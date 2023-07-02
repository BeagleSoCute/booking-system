import React from "react";
import styled from "styled-components";
import { Form, Input, InputNumber, Button } from "antd";


const BookingSection = ({ selectOrder, onFinish }) => {
  const [form] = Form.useForm();
  const handleSubmit = (value) => {
    form.resetFields();
    onFinish(value);
  };
  return (
    <StyledDiv className="booking-section">
      <Form
        form={form}
        className="border border-gray-300 p-5"
        name="product-form"
        labelCol={{ span: 24 }}
        onFinish={handleSubmit}
        autoComplete="off"
      >
        <div className="flex justify-center items-center space-x-4">
          {selectOrder === "meat" ? (
            <Form.Item
              label="Meat"
              name="name"
              rules={[{ required: true, message: "" }]}
            >
              <Input
                disabled={selectOrder === "" ? true : false}
                className="w-full"
              />
            </Form.Item>
          ) : (
            <>
              <Form.Item
                label="Food Name"
                name="name"
                rules={[{ required: true, message: "" }]}
              >
                <Input
                  disabled={selectOrder === "" ? true : false}
                  className="w-full"
                />
              </Form.Item>
              <Form.Item
                label="Price"
                name="price"
                rules={[{ required: true, message: "" }]}
              >
                <InputNumber
                  disabled={selectOrder === "" ? true : false}
                  className="w-full"
                />
              </Form.Item>
            </>
          )}
        </div>
        <Form.Item colon={false} className="flex justify-center">
          <Button
            disabled={selectOrder === "" ? true : false}
            className="w-64"
            htmlType="submit"
          >
            Add
          </Button>
        </Form.Item>
      </Form>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  &.booking-section {
  }
`;

export default BookingSection;
