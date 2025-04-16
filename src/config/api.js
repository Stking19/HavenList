import axios from "axios";
import toast from "react-hot-toast";

const API_URL = import.meta.env.VITE_API_URL;;


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


export const loginUser = async (credentials, role) => {
  try {
    const endpoint = role === "landlord" ? "loginlandlord" : "loginTenant"
    const response = await api.post( endpoint, credentials);
    console.log(endpoint)
    const { token, data, message } = response.data;
     console.log(response)
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(data.fullName));
    localStorage.setItem("id", JSON.stringify(data.id));
    toast.success(message);
    return data;
  } catch (error) {
    toast.error(error.response.data.message)
    throw error;
  }
};

export const signup = async (userData, role) => {
  try {
    const endpoint = role === "landlord" ? "registerlandlord" : "registerTenant"
    const response = await api.post(endpoint, userData);
    toast.success(response.data.message);
    console.log(response)
    return response.data;
  } catch (error) {
    //  toast.error(error.response.data.message)
    throw error;
  }
};


export const resetPassword = async ({Password,confirmPassword,otp,role}) => {
  try {
    const endpoint = role === "landlord" ? "landlordpassword" : "tenantpassword"
    const response = await api.post( endpoint, {Password, confirmPassword,otp});
    console.log(response)
    toast.success(response.data.message);
    return response.data;
  } catch (error) {
   console.log(error)
   toast.error(error.response.data.message)
    throw error;
  }
};

export const forgetPassword = async (email) => {
  try {
    const response = await api.post("landlordForgotPassword", email);
    console.log(response)
    toast.success(response.data.message);
    return response.data;
  } catch (error) {
   console.log(error)
   toast.error(response.data.message)
    throw error;
  }
};

export const profileUpload = () => {


  
  const formData = new FormData();
  formData.append("fullName", details.fullName);
  formData.append("email", details.email);
  formData.append("street", details.street);
  formData.append("locality", details.locality);
  formData.append("state", details.state);

  if (image) {
    formData.append("profileImage", image);
  }

  
}


export default api;
