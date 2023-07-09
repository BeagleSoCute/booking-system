import styled from "styled-components";
import RegisterForm from "components/register/RegisterForm";
import { register } from "services/register.service";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const handleOnFinish = async (values) => {
    const { email, name, password, phoneNumber } = values;
    const isSuccess = await register({ email, name, password, phoneNumber, role:"customer" });
    if (isSuccess) {
      navigate("/login");
    }
  };
  return (
    <StyledDiv className="register">
        <RegisterForm onFinish={handleOnFinish} />
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  &.login {
    height: 100vh;
    .form-warpper {
      margin-top: 150px !important;
      display: block;
      padding: 20px;
      margin: auto;
      h1 {
        text-align: center;
      }
      .button-submit-layout {
        display: flex;
        justify-content: center;
      }
      button.button-submit {
        width: 250px;
      }
    }
    .content {
      height: 100%;
    }
  }
`;

export default Register;
