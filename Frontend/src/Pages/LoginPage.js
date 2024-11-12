import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import BackgroundImage from '../Assests/img.jpg'; // Use a relative path for the background image
import { Link } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <Navbar/>
    <div
      className="flex items-center justify-center min-h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="p-8 border border-gray-400 shadow-lg rounded-xl bg-white/10 backdrop-blur-md w-80 md:w-96">
        <h2 className="mb-6 text-3xl font-semibold text-center text-white">Login</h2>
        <form className="space-y-6">
          <div>
            <label className="sr-only">Username</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Username"
                className="w-full py-2 pl-10 pr-4 text-white rounded-full outline-none bg-white/10"
              />
              <span className="absolute text-white transform -translate-y-1/2 left-3 top-1/2">
                <FontAwesomeIcon icon={faUser} />
              </span>
            </div>
          </div>
          <div>
            <label className="sr-only">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full py-2 pl-10 pr-10 text-white rounded-full outline-none bg-white/10"
              />
              <span className="absolute text-white transform -translate-y-1/2 left-3 top-1/2">
                <FontAwesomeIcon icon={faLock} />
              </span>
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute text-white transform -translate-y-1/2 right-3 top-1/2 focus:outline-none"
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm text-gray-300">
            <label className="flex items-center">
              <input type="checkbox" className="mr-1" />
              Remember me
            </label>
            <a href="#" className="hover:underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full py-2 font-semibold text-purple-700 transition bg-white rounded-full hover:bg-gray-200"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-300">
          Don’t have an account? 
          <Link to={'/RegistraionForm'}><button className="font-semibold text-white hover:underline">Register</button></Link>
        </p>
      </div>
    </div>
    </div>
  );
}

export default LoginPage;
