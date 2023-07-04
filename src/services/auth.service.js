import { loginApi, logoutApi } from "apis/auth.api";
import { notification } from "helpers/notification.helper";
export const login = async (data) => {
  const { success, payload } = await loginApi(data);
  console.log('payloaddd',payload)
  if (success) {
    localStorage.setItem("token", payload.token);
    notification({ type: "success", message: "Login Success" });
    return true;
  } else {
    return false;
  }
};

export const logout = async () => {
  const { success } = await logoutApi();
  if (success) {
    notification({ type: "success", message: "Logout Success" });
    return true;
  } else {
    notification({ type: "error", message: "Logout fail!" });
    return false;
  }
};
