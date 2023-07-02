import { useEffect, useContext } from "react";
import { logout } from "services/auth.service";
import { useNavigate } from "react-router-dom";
import { AppContext } from "contexts/app.context";
import { checkIsAuth } from "helpers/auth.helper";
import { notification } from "helpers/notification.helper";

const Logout = () => {
  const navigate = useNavigate();
  const resCheckAuth = checkIsAuth();
  const { setLoading } = useContext(AppContext);
  useEffect(() => {
    const init = async () => {
      setLoading(true);

      if (!resCheckAuth) {
        notification({
          type: "warning",
          message: "Warning",
          description:
            "You are not logging in, please login into the system first.",
        });
        navigate("/login");
        return;
      }
      const success = await logout();
      if (success) {
        navigate("/login");
      }
      setLoading(false);
      return;
    };
    init();
    // eslint-disable-next-line
  }, []);
};

export default Logout;
