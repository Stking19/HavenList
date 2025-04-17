import axios from "axios";
import toast from "react-hot-toast";

const API_URL = "https://heavenlist2-zaz3.onrender.com/api/v1/"

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
    // console.log(error);
    // toast.error(message);
    return Promise.reject(error);
  }
);


export const loginUser = async (credentials, role) => {
  try {
    const endpoint = role === "landlord" ? "loginlandlord" : "loginTenant";
    const response = await api.post(endpoint, credentials);
    const { token, data, message } = response.data;
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(data.fullName));
    localStorage.setItem("id", JSON.stringify(data.id));
    toast.success(message);
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
    throw error;
  }
};


export const signup = async (userData, role) => {
  try {
    const endpoint = role === "landlord" ? "registerlandlord" : "registerTenant";
    const response = await api.post(endpoint, userData);
    if (response.data?.success || response.status === 201) {
      toast.success(response.data.message || "Signup successful!" || "");
      return response.data;
    } else {
      throw new Error(response.data?.message);
    }
  } catch (error) {
    const message = error?.response?.data?.message;
    toast.error(message);
    throw new Error(message);
  }
};


export const resetPassword = async ({Password, confirmPassword, otp, role}) => {
  try {
    const endpoint = role === "landlord" ? "landlordpassword" : "tenantpassword";
    const response = await api.post(endpoint, { Password, confirmPassword, otp });
    toast.success(response.data.message);
    return response.data;
  } catch (error) {
    toast.error(error.response.data.message);
    throw error;
  }
};


export const forgetPassword = async (email) => {
  try {
    const response = await api.post("landlordForgotPassword", email);
    toast.success(response.data.message);
    return response.data;
  } catch (error) {
    toast.error(error.data.message);
    throw error;
  }
};


export const createProfile = async (landlordId, formData) => {
  console.log(formData)
  try {
    const token = localStorage.getItem("token");
    const response = await api.post(`createProfile/${landlordId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error creating profile:", error);
    toast.error(error.data.message)
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

export const updateProfile = async (landlordId, formData) => {
  try {
    const response = await api.put(`updateLandlordProfile/${landlordId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data", 
      },
    });
    return response.data; 
  } catch (error) {
    console.error("Error updating profile:", error);
    throw error; 
  }
};

export const deleteProfile = async (landlordId) => {
  try {
    const token = localStorage.getItem("token");
    const landlordId = localStorage.getItem("id")
    const response = await api.delete(`deleteLandlordProfile/${landlordId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error deleting profile:", error);
    throw error;
  }
};



export default api;
 