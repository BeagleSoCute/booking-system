import { addProductAPI, getProductAPI } from "../apis/product.api";

export const addProduct = async (data) => {
  const { success, payload } = await addProductAPI(data);
  return { success, payload };
};

export const getProduct = async () => {
  const { success, payload } = await getProductAPI();
  return { success, payload };
};
