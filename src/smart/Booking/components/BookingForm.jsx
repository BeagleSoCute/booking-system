import React, { useEffect } from "react";
import styled from "styled-components";
import { Button, Form, Input, DatePicker, InputNumber } from "antd";

const Booking = ({
  bookingDetails,
  isConfirm,
  onFinish,
  onUpdate,
  onDelete,
  isEdit = true,
  isAdmin = false,
  isSeeDetail = false,
}) => {
  useEffect(() => {
    form.setFieldsValue(bookingDetails);
  }, [bookingDetails]);
  const [form] = Form.useForm();
  const isDisableFiled = isSeeDetail && !isAdmin;
  const handleUpdateBooking = () => {
    const data = form.getFieldsValue();
    onUpdate(data)
  }
  return (
    <StyledDiv className="booking-form">
      <Form
        form={form}
        className="border border-gray-300 p-5"
        name="basic"
        label="test"
        labelCol={{ span: 24 }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <div className="flex justify-center items-center space-x-4">
          <Form.Item
            label="People"
            name="adultAmount"
            rules={[{ required: true, message: "" }]}
          >
            <InputNumber  disabled={isDisableFiled} className="w-full" />
          </Form.Item>
          <Form.Item
            label="Baby aged below 4"
            name="babyAmount"
            rules={[{ required: true, message: "" }]}
          >
            <InputNumber disabled={isDisableFiled} className="w-full" />
          </Form.Item>
          <Form.Item
            label="Date & Time"
            name="dateTime"
            rules={[{ required: true, message: "" }]}
          >
            <DatePicker
              disabled={isDisableFiled}
              showTime
              className="w-full"
              allowClear={false}
              format="DD/MM/YYYY HH:mm"
            />
          </Form.Item>
          <Form.Item label="Specification" name="specification">
            <Input.TextArea disabled={isDisableFiled} className="w-full" />
          </Form.Item>
        </div>
        {isEdit && (
          <Form.Item colon={false} className="flex justify-center ">
            {isAdmin ? (
              <>
                <Button onClick={handleUpdateBooking} className="w-64">Update</Button>
                <Button onClick={onDelete} className="w-64">Delete</Button>
              </>
            ) : (
              <Button className="w-64" htmlType="submit">
                {isConfirm ? "View your order" : "Confirm"}
              </Button>
            )}
          </Form.Item>
        )}
      </Form>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  &.booking-form {
  }
`;
export default Booking;
