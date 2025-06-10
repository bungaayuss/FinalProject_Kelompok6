import { API } from "../_api";

export const getConfirmations = async () => {
  const { data } = await API.get("/confirmations");
  return data.data;
};

export const createConfirmations = async (data) => {
  try {
    const response = await API.post("/confirmations", data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const showConfirmations = async (id) => {
  try {
    const { data } = await API.get(`/confirmations/${id}`);
    return data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updateConfirmations = async (id, data) => {
  try {
    const response = await API.post(`/confirmations/${id}`, data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteConfirmations = async (id) => {
  try {
    await API.delete(`/confirmations/${id}`);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
