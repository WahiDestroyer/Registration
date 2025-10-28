import axios from "axios";

// Cookie utility functions
const setCookie = (name, value, days) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;Secure;SameSite=Strict`;
};

const getCookie = (name) => {
  const cookies = document.cookie.split(';');
  for (let cookie of cookies) {
    const [cookieName, cookieValue] = cookie.trim().split('=');
    if (cookieName === name) {
      return cookieValue;
    }
  }
  return null;
};

const deleteCookie = (name) => {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
};

const api = axios.create({
  baseURL: "https://api.freeapi.app/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    
    const token = localStorage.getItem("accessToken") || getCookie("accessToken");
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      try {
        const refreshToken = localStorage.getItem("refreshToken") || getCookie("refreshToken");
        
        if (refreshToken) {
   
          const refreshResponse = await api.post("/auth/refresh", { refreshToken });
          const newAccessToken = refreshResponse.data.accessToken;
          
       
          localStorage.setItem("accessToken", newAccessToken);
          setCookie("accessToken", newAccessToken, 1);
          
     
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return api(originalRequest);
        }
      } catch (refreshError) {
     
        logoutUser();
        return Promise.reject(refreshError);
      }
    }
    
    return Promise.reject(error);
  }
);


const logoutUser = () => {
 
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("user");
  
  deleteCookie("accessToken");
  deleteCookie("refreshToken");
};

export const blogservices = {
  blog: async () => {
    const res = await api.get("/products");
    return res.data;
  },
  blogdetails: async (id) => {
    const res = await api.get(`/products/${id}`);
    return res.data;
  },
};

export const authservices = {
  registration: async (userData) => {
    const res = await api.post("/users/register", userData);
    return res.data;
  },
  login: async (userData) => {
    const res = await api.post("/users/login", userData);
    return res.data;
  },
  logout: async () => {
    logoutUser();
    return { success: true, message: "Logged out successfully" };
  }
};

// Export cookie utilities if needed elsewhere
export { setCookie, getCookie, deleteCookie, logoutUser };  