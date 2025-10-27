import React, { useState } from "react";
import { authservice } from "./api";

const App = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    confirmEmail: "",
    password: "",
    dob: "",
    gender: "",
    terms: false,
    role: "ADMIN"
  });

  

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.email !== formData.confirmEmail) {
      console.log("Emails do not match");
      return;
    }

    if (!formData.terms) {
      console.log("Please accept terms and conditions");
      return;
    }

    const userData = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
      role: formData.role
    };

    try {
      const laam = await authservice.registration(userData);
    } catch (err) {
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={handleSubmit}>
              
              {/* Username field */}
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <div className="mt-1">
                  <input
                    onChange={handleChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400"
                    required
                    type="text"
                    name="username"
                    id="username"
                    value={formData.username}
                  />
                </div>
              </div>

              {/* Email fields */}
              <div className="mt-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    onChange={handleChange}
                    required
                    type="email"
                    name="email"
                    id="email"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400"
                    value={formData.email}
                  />
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="confirmEmail" className="block text-sm font-medium text-gray-700">
                  Confirm Email address
                </label>
                <div className="mt-1">
                  <input
                    onChange={handleChange}
                    required
                    type="email"
                    name="confirmEmail"
                    id="confirmEmail"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400"
                    value={formData.confirmEmail}
                  />
                </div>
              </div>

              {/* Password field */}
              <div className="mt-6">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    onChange={handleChange}
                    required
                    type="password"
                    name="password"
                    id="password"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400"
                    value={formData.password}
                  />
                </div>
              </div>

              {/* Date of Birth */}
              <div className="mt-6">
                <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
                  Date of Birth
                </label>
                <div className="mt-1">
                  <input
                    onChange={handleChange}
                    required
                    type="date"
                    name="dob"
                    id="dob"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                    value={formData.dob}
                  />
                </div>
              </div>

              {/* Gender */}
              <div className="flex items-center justify-center mt-6">
                <span className="mr-3 text-gray-700 font-medium">Gender:</span>
                <label className="inline-flex items-center">
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="gender"
                    value="Male"
                    className="form-radio h-5 w-5"
                    checked={formData.gender === "Male"}
                  />
                  <span className="ml-2 text-gray-700">Male</span>
                </label>
                <label className="inline-flex items-center ml-6">
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="gender"
                    value="Female"
                    className="form-radio h-5 w-5"
                    checked={formData.gender === "Female"}
                  />
                  <span className="ml-2 text-gray-700">Female</span>
                </label>
              </div>

              {/* Terms and Conditions */}
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    onChange={handleChange}
                    type="checkbox"
                    name="terms"
                    id="terms"
                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    checked={formData.terms}
                  />
                  <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                    I agree to the terms and conditions
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-6">
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 text-white bg-indigo-600 rounded-md"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
