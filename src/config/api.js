import axios from "axios";
import toast from "react-hot-toast";


const API_URL = import.meta.env.VITE_API_URL;
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
    console.log(error);
    // toast.error(message);
    return Promise.reject(error);
  }
);

// LANDLORD LOGIN
export const loginUser = async (credentials) => {
  try {
    const response = await api.post("loginlandlord", credentials);
    const { token, data, message, landlordProfile } = response.data;
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(data?.fullName));
    localStorage.setItem("email", JSON.stringify(data?.email));
    localStorage.setItem("id", JSON.stringify(data?.id));
    localStorage.setItem("landlordprofileid", landlordProfile?.id);
    localStorage.setItem("profileImage", landlordProfile?.profileImage);
    localStorage.setItem("role", "landlord");  // Add this line
    console.log(response);
    toast.success(message);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    throw error;
  }
};

// TENANT LOGIN
export const tenantLoginUser = async (credentials) => {
  try {
    const response = await api.post("loginTenant", credentials);
    const { token, data, message } = response.data;
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(data?.fullName));
    localStorage.setItem("email", JSON.stringify(data?.email));
    localStorage.setItem("id", JSON.stringify(data?.id));
    localStorage.setItem("role", "tenant");  // Add this line
    console.log(response);
    toast.success(message);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.message || "Network Error");
    throw error;
  }
};

// SIGNUP
export const signup = async (userData, role) => {
  try {
    const endpoint =
      role === "landlord" ? "registerlandlord" : "registerTenant";
    const response = await api.post(endpoint, userData);
    if (response.data?.success || response.status === 201) {
      toast.success(response.data.message || "Signup successful!");
      console.log(response);
    } else {
      throw new Error(response.data?.message);
    }
  } catch (error) {
    const message = error?.response?.data?.message;
    console.log(error);
    toast.error(message);
    throw new Error(message);
  }
};

export const resetPassword = async ({ password, confirmPassword, role }) => {
  const resetToken = localStorage.getItem("resetToken");
  try {
    const endpoint =
      role === "landlord" ? "landlord/reset-password" : "tenant/reset-password";
    const response = await api.post(`${endpoint}/${resetToken}`, {
      password,
      confirmPassword,
    });
    toast.success(response.data.message);
    return response.data;
  } catch (error) {
    toast.error(error.response.data.message);
    throw error;
  }
};

export const forgetPassword = async (email, role) => {
  try {
    const endpoint =
      role === "landlord" ? "landlordForgotpassword" : "TenantForgotpassword";
    const response = await api.post(endpoint, email);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const createProfile = async (landlordId, formData) => {
  console.log(formData);
  try {
    const token = localStorage.getItem("token");
    const response = await api.post(`createProfile/${landlordId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
    if (response.status === 201) {
      const { data, message } = response.data;
      localStorage.setItem("profileImage", data.profileImage);
      localStorage.setItem("landlordprofileid", data.id);
      toast.success(message)
    }
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.message)
  }
};


export const getProfile = async (landlordId, state) => {
  const token = localStorage.getItem("token");
  try {
    const response = await api.get(
      `getlandlordprofile/${landlordId}`,
      {},
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response) 
    const { data } = response.data;
    localStorage.setItem("profileImage", JSON.stringify(data.profileImage));
    return response?.data?.data;
  } catch (error) {
    console.log(error);
    state(false)
  }
};

export const updateProfile = async (profileId, formData) => {
  const token = localStorage.getItem("token");
  try {
    const response = await api.put(
      `updateLandlordProfile/${profileId}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response) 
    toast.success(response.data.message)
    return response?.data?.data;
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.message)
  }
};

export default api;
