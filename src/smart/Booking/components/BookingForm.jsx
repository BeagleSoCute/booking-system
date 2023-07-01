import React, { useEffect } from "react";
import styled from "styled-components";
import { Button, Form, Input, DatePicker, InputNumber } from "antd";
import dayjs from "dayjs";

const Booking = ({ bookingDetails, isConfirm, onFinish, isEdit = true , isAdmin=false}) => {
  useEffect(() => {
    form.setFieldsValue(bookingDetails);
  }, [bookingDetails]);
  const [form] = Form.useForm();
  const handleDisabledStartDate = (current) => {
    const finishDate = form.getFieldValue("finishDateTime");
    if (finishDate) {
      return current && current.isAfter(dayjs(finishDate).endOf("day"), "day");
    }
  };
  const handleDisableStartTime = () => {
    const finishDate = form.getFieldValue("finishDateTime");
    if (finishDate) {
      //   return preventSelectExcessTime(
      //     form.getFieldValue("startDateTime"),
      //     form.getFieldValue("finishDateTime"),
      //     form.getFieldValue("finishDateTime")
      //   );
    }
  };
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
            <InputNumber className="w-full" />
          </Form.Item>
          <Form.Item
            label="Baby aged below 4"
            name="babyAmount"
            rules={[{ required: true, message: "" }]}
          >
            <InputNumber className="w-full" />
          </Form.Item>
          <Form.Item
            label="Date & Time"
            name="dateTime"
            rules={[{ required: true, message: "" }]}
          >
            <DatePicker
              showTime
              className="w-full"
              disabledDate={handleDisabledStartDate}
              allowClear={false}
              format="DD/MM/YYYY HH:mm"
              disabledTime={() => handleDisableStartTime()}
            />
          </Form.Item>
          <Form.Item label="Specification" name="specification">
            <Input.TextArea className="w-full" />
          </Form.Item>
        </div>
        {isEdit && (
          <Form.Item colon={false} className="flex justify-center ">
            {isAdmin ? (
              <>
                <Button className="w-64">Update</Button>
                <Button className="w-64">Delete</Button>
              </>
            ) : (
              <Button className="w-64" htmlType="submit">
                {isConfirm ? "Order here" : "Confirm"}
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
