import { API } from "../_api";

export const getUsers = async () => {
  const { data } = await API.get("/users");
  return data.data;
};

export const createUsers = async (data) => {
  try {
    const response = await API.post("/users", data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const showUsers = async (id) => {
  try {
    const { data } = await API.get(`/users/${id}`);
    return data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updateUsers = async (id, data) => {
  try {
    const response = await API.post(`/users/${id}`, data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteUsers = async (id) => {
  try {
    await API.delete(`/users/${id}`);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
