import { apiInstance } from "configs/axios.config";

export const addProductAPI = (data) => apiInstance.post("/product/add", data);
export const getProductAPI = () => apiInstance.get("/product/get");
