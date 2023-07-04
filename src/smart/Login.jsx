import {useContext} from 'react'
import styled  from "styled-components";
import LoginForm from "components/login/LoginForm";
import { login } from "services/auth.service";
import { useNavigate } from "react-router-dom";
import { AppContext } from "contexts/app.context";

const Login = () => {
  const { setLoading} = useContext(AppContext);
  const navigate = useNavigate();
  const handleOnFinish = async (values) => {
    setLoading(true);
    const isLoginSuccess = await login(values);
    setLoading(false)
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
