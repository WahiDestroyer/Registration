import React, { useState } from "react";
import { authservices, setCookie, getCookie } from "../services/api"; 

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);
  setErrorMsg("");
  setSuccessMsg("");

  try {
    const response = await authservices.login({
      username: formData.username,
      password: formData.password,
    });

    console.log("Login success:", response);

   
    const { accessToken, refreshToken, user } = response.data;

  
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("user", JSON.stringify(user));

  
    setCookie("accessToken", accessToken, 1);
    setCookie("refreshToken", refreshToken, 7);

    console.log('accessToken from cookie:', getCookie('accessToken'));
    console.log('refreshToken from cookie:', getCookie('refreshToken'));

    setSuccessMsg("Login successful! Cookies and localStorage set.");
    
    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 1000);
    
  } catch (error) {
    console.error("Login error:", error);
    if (error.response) {
      setErrorMsg(error.response.data?.message || "Login failed");
    } else if (error.request) {
      setErrorMsg("Network error. Please check your connection.");
    } else {
      setErrorMsg("An unexpected error occurred.");
    }
  } finally {
    setIsLoading(false);
  }
};
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-1">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              required
              minLength={3}
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              required
              minLength={6}
            />
          </div>

          {errorMsg && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 text-sm text-center">{errorMsg}</p>
            </div>
          )}
          
          {successMsg && (
            <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-700 text-sm text-center">{successMsg}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;



// robiulhassannn@gmail.com
