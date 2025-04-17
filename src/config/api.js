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


export const loginUser = async (credentials) => {
  try {
    const response = await api.post("loginlandlord", credentials);
    const { token, data, message } = response.data;
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(data.fullName));
    localStorage.setItem("email", JSON.stringify(data.email));
    localStorage.setItem("id", JSON.stringify(data.id));
    console.log(data)
    toast.success(message);
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
    throw error;
  }
};
export const tenantLoginUser = async (credentials) => {
  try {
    const response = await api.post("loginTenant", credentials);
    const { token, data, message } = response.data;
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(data.fullName));
    localStorage.setItem("email", JSON.stringify(data.email));
    localStorage.setItem("id", JSON.stringify(data.id));
    console.log(data)
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


export const forgetPassword = async (email, role) => {
  try {
    const endpoint = role === "landlord" ? "landlordForgotpassword" : "TenantForgotpassword";
    const response = await api.post(endpoint, email);
    console.log(response)
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

    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      toast.error("Profile already exists");
    } else {
      toast.error(error.response?.data?.message || "Something went wrong");
    }

    console.error("Error creating profile:", error);
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
}
// export const editProfile = async (landlordId) => {
//   try {
//     const response = await api.put(`getlandlordprofile/${landlordId}`);
//     return response.data; 
//   } catch (error) {
//     console.error("Error updating profile:", error);
//     throw error; 
//   }
// };


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
 
