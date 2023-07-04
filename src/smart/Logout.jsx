import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { checkIsAuth } from "helpers/auth.helper";
import { notification } from "helpers/notification.helper";

const Logout = () => {
  const navigate = useNavigate();
  const resCheckAuth = checkIsAuth();
  useEffect(() => {
    const init = async () => {
      if (!resCheckAuth) {
        notification({
          type: "warning",
          message: "Warning",
          description:
            "You are not logging in, please login into the system first.",
        });
      }else{
        notification({
          type: "success",
          message: "Logout Success",
        });
        localStorage.removeItem("token");
      }
      navigate("/login");
    };
    init();
    // eslint-disable-next-line
  }, []);
};

export default Logout;
