import { addProductAPI } from "../apis/product.api";

export const addProduct = async (data) => {
    console.log('data',data)
  const { success, payload } = await addProductAPI(data);
 console.log("payload from adding product are ", payload);
 return { success, payload };
};
