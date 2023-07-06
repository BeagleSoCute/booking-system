import styled  from "styled-components";
import LoginForm from "components/login/LoginForm";
import { login } from "services/auth.service";
import { useNavigate } from "react-router-dom";

const Login = () => {
  console.log('process.env.PRODUCTION_AZURE',process.env.REACT_APP_PRODUCTION)
  const navigate = useNavigate();
  const handleOnFinish = async (values) => {
    const isLoginSuccess = await login(values);
    if (isLoginSuccess) {
        navigate("/dashboard");
      return;
    }
  };
  return (
    <StyledDiv className="login">
      <LoginForm onFinish={handleOnFinish} />
    </StyledDiv>
  );
};
const StyledDiv = styled.div`
  &.login {
  }
`;
export default Login;
