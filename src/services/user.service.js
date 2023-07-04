import { getUserApi, getAllUsersApi, getUserDetailsApi } from "apis/user.api";

export const getMyData = async () => {
  const res = await getUserApi();
if(!res?.success){
  return {success:false}
}
  return { success: true, userData: res.payload };
};

export const getAllUsers = async () => {
  const res = await getAllUsersApi();
  if(!res?.success){
    return {success:false}
  }
  return { success: true, allUsersData: res.payload };
};

export const getUserDetails = async (id) => {
  const { success, payload: details } = await getUserDetailsApi(id);
  if(!success){
    return {success:false}
  }
  return { success, details };
};
