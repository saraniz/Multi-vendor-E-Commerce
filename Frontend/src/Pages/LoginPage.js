import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link,useNavigate} from "react-router-dom";
import LogoImage from '../Assests/KLOSET.png'; // Path to your logo image
import {useDispatch} from "react-redux" //import useDispatch for redux
import { userLogin } from "../Storage/Auth/UserAction";   //import the login action
import { toast } from 'react-toastify'; // Import Toastify

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // On mount, check localStorage for remembered username
  React.useEffect(() => {
    const rememberedUsername = localStorage.getItem('rememberedUsername');
    if (rememberedUsername) {
      setUsername(rememberedUsername);
      setRememberMe(true);
    }
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const loginData = { username, password };

    // Remember username if checked, else remove
    if (rememberMe) {
      localStorage.setItem('rememberedUsername', username);
    } else {
      localStorage.removeItem('rememberedUsername');
    }

    // Dispatch the login action
    dispatch(userLogin(loginData));

    // Show Toastify success message
    toast.success('Login Success!');

    //redirect to homepage
    navigate('/HomePage')
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
            Welcome to The World's Largest Online Shopping Platform
          </h2>

          {/* Login Form */}
          <h3 className="text-2xl font-semibold text-center text-gray-800">Login</h3>
          <form className="w-full space-y-5" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full py-3 pl-10 pr-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <span className="absolute text-gray-500 transform -translate-y-1/2 left-3 top-1/2">
                <FontAwesomeIcon icon={faUser} />
              </span>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
            <div className="flex items-center justify-between text-sm text-gray-500">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-1"
                  checked={rememberMe}
                  onChange={e => setRememberMe(e.target.checked)}
                />
                Remember me
              </label>
              <a href="/ForgotPassword" className="hover:underline">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full py-3 font-semibold text-white rounded-lg shadow-lg bg-gradient-to-r from-blue-800 to-blue-950 hover:from-blue-700 hover:to-blue-800"
            >
              Login
            </button>
          </form>

          {/* Register Link */}
          <p className="text-sm text-center text-gray-500">
            Don’t have an account?{" "}
            <Link to={'/RegistrationForm'}>
              <button className="font-semibold text-indigo-600 hover:underline">Register</button>
            </Link>
            <Link to={'/AdminLogin'}>
            <button className="font-semibold text-indigo-600 hover:underline">Admin Login</button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
