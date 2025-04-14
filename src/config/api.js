import axios from "axios";
import toast from "react-hot-toast";

const API_URL = "https://heavenlist2-zaz3.onrender.com/api/v1/";


const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});


api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);


api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error?.response?.data?.message;
    toast.error(message);
    return Promise.reject(error);
  }
);


export const loginUser = async (credentials) => {
  try {
    const response = await api.post("loginTenant", credentials);
    const { token, data, message } = response.data;

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(data));
    toast.success(message);

    return data;
  } catch (error) {
   
    throw error;
  }
};


export const signup = async (userData) => {
  try {
    const response = await api.post("registerTenant", userData);
    toast.success(response.data.message);
    return response.data;
  } catch (error) {
   console.log(response)
    throw error;
  }
};

// You can keep adding more API functions here.

export default api;
