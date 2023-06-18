import React from "react";
import styled from "styled-components";
import { Button, Checkbox, Form, Input } from "antd";

const Booking = () => {
  return (
    <StyledDiv className="booking-form">
      <Form
        name="basic"
        labelCol={{ span: 24 }}
        initialValues={{ remember: true }}
        // onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item className="button-submit-layout">
          <Button className="button-submit" type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  &.booking-form {
  }
`;
export default Booking;
