import React from "react";
import { Alert } from "antd";
import PropTypes from "prop-types";
import styled from "styled-components";

const propTypes = {
  type: "success" || "error" || "info" || "warning",
  message: PropTypes.string,
};
const defaultProps = {
  type: "success",
};

const AlertMessage = ({ type, message }) => (
  <StyledAlert className="ant-alert" message={message} type={type} />
);

AlertMessage.propTypes = propTypes;
AlertMessage.defaultProps = defaultProps;

const StyledAlert = styled(Alert)`
  &.ant-alert {
    .ant-alert-message {
      display: flex;
      justify-content: center;
    }
  }
`;
export default AlertMessage;
