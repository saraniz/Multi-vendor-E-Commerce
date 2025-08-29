import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import LogoImage from '../Assests/KLOSET.png'; // Path to your logo image
import { adminLogin } from '../Storage/admin/adminaction'; //  Import Axios function
import Swal from "sweetalert2";


function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = async (event) => {
    event.preventDefault(); 

    const response = await adminLogin(email, password);

    if (response.jwt) {
      // ✅ Login successful
      localStorage.setItem("adminToken", response.jwt); // store JWT
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        timer: 1000,
        showConfirmButton: false,
      });
      navigate("/AdminDashboard"); // Redirect
    } else {
      // ❌ Login failed
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: response.error,
      });
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex items-center w-full max-w-3xl p-10 space-x-6 bg-white shadow-2xl rounded-2xl">
       
        {/* Logo on the Left Side */}
        <div className="items-center justify-center hidden w-1/3 md:flex">
          <Link to={'/'}><img src={LogoImage} alt="Logo" className="w-48 h-48" /></Link>
        </div>


        {/* Right Side with Form */}
        <div className="flex flex-col items-center w-full p-6 space-y-6 md:w-2/3">
         
          {/* Welcome Text */}
          <h2 className="text-xl font-bold text-center text-gray-800">
            Admin Login - KLOSET
          </h2>


          {/* Login Form */}
          <h3 className="text-2xl font-semibold text-center text-gray-800">Login</h3>
          <form className="w-full space-y-5" onSubmit={handleSubmit}>
           
            {/* Email Field */}
            <div className="relative">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full py-3 pl-10 pr-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <span className="absolute text-gray-500 transform -translate-y-1/2 left-3 top-1/2">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
            </div>


            {/* Password Field */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full py-3 pl-10 pr-10 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <span className="absolute text-gray-500 transform -translate-y-1/2 left-3 top-1/2">
                <FontAwesomeIcon icon={faLock} />
              </span>
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute text-gray-500 transform -translate-y-1/2 right-3 top-1/2 focus:outline-none"
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>


            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 font-semibold text-white rounded-lg shadow-lg bg-gradient-to-r from-blue-800 to-blue-950 hover:from-blue-700 hover:to-blue-800"
            >
              Login
            </button>
          </form>


        </div>
      </div>
    </div>
  );
}


export default AdminLoginPage;