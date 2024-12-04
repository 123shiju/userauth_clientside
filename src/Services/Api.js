import axios from "axios";

const API_URL = "https://userauthserver.vercel.app/";

export const register = (userData) => {
  return axios.post(`${API_URL}/register`, userData);
};

export const login = (credentials) => {
  return axios.post(`${API_URL}/login`, credentials);
};

export const getUsers = () => {
  return axios.get(`${API_URL}/getuser`);
};

export const deleteUser = (id) => {
  return axios.delete(`${API_URL}/deleteuser/${id}`);
};

export const updateUser = (id, updatedData) => {
  return axios.put(`${API_URL}/updateuser/${id}`, updatedData);
};

export const getUserById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/getuserById/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: "Failed to fetch user details" };
  }
};
