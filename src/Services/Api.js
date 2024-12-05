import axios from "axios";

const API_URL = "https://userauthbackend-oh4y.onrender.com";

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true, 

export const register = (userData) => {
  return axiosInstance.post(`${API_URL}/register`, userData);
};

export const login = (credentials) => {
  return axiosInstance.post(`${API_URL}/login`, credentials);
};

export const getUsers = () => {
  return axiosInstance.get(`${API_URL}/getuser`);
};

export const deleteUser = (id) => {
  return axiosInstance.delete(`${API_URL}/deleteuser/${id}`);
};

export const updateUser = (id, updatedData) => {
  return axiosInstance.put(`${API_URL}/updateuser/${id}`, updatedData);
};

export const getUserById = async (id) => {
  try {
    const response = await axiosInstance.get(`${API_URL}/getuserById/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: "Failed to fetch user details" };
  }
};
