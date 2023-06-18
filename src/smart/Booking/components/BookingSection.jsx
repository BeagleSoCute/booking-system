import React from "react";
import styled from "styled-components";
import {
  Button,
  Checkbox,
  Form,
  Input,
  DatePicker,
  InputNumber,
  tr,
} from "antd";
import dayjs from "dayjs";

const BookingSection = () => {
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
    <StyledDiv className="booking-section ">
      <Form
        className="border border-gray-300 p-5"
        name="basic"
        label="test"
        labelCol={{ span: 24 }}
        initialValues={{ remember: true }}
        // onFinish={onFinish}
        autoComplete="off"
      >
        <div className="flex justify-center items-center space-x-4">
          <Form.Item
            label="People"
            name="clientNumber"
            rules={[{ required: true, message: "" }]}
          >
            <InputNumber className="w-full" />
          </Form.Item>
          <Form.Item
            label="Baby aged below 4"
            name="babyNumber"
            rules={[{ required: true, message: "" }]}
          >
            <InputNumber className="w-full" />
          </Form.Item>
          <Form.Item
            label="Date & Time"
            name="bookingDate"
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
        <Form.Item colon={false} className="flex justify-center ">
          <Button className="w-64" htmlType="submit">
            {" "}
            Confirm{" "}
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
