import { API } from "../_api";

export const getTransactions = async () => {
  const { data } = await API.get("/transactions");
  return data.data;
};

export const createTransactions = async (data) => {
  try {
    const response = await API.post("/transactions", data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const showTransactions = async (id) => {
  try {
    const { data } = await API.get(`/transactions/${id}`);
    return data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updateTransactions = async (id, data) => {
  try {
    const response = await API.post(`/transactions/${id}`, data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteTransactions = async (id) => {
  try {
    await API.delete(`/transactions/${id}`);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
