import React from "react";
import {
  FaUserCircle,
  FaHeart,
  FaShoppingCart,
  FaListAlt,
  FaEdit,
  FaSignOutAlt,
  FaTachometerAlt,
  FaStore,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch } from 'react-redux';
import { logout } from "../../Storage/Auth/UserAction";

function AdminNavbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //function to handle logout
  const handleLogout = () => {
    // Show a success message using SweetAlert2
    Swal.fire({
      title: "Logged Out!",
      text: "You have been successfully logged out.",
      icon: "success",
      confirmButtonText: "OK",
      timer: 2000, // Automatically close after 2 seconds
      timerProgressBar: true,
    }).then(() => {
      // Remove the JWT token from local storage
      dispatch(logout())
      navigate('/')
      
      // Redirect the user to the login page or home page
      // Change '/login' to your desired route after logout
    });
  };
  return (
    <div className="flex justify-center min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="flex flex-col items-center p-6 space-y-5 text-white bg-gray-800 shadow-lg w-80">
        {/* User Profile */}
        <div className="flex flex-col items-center">
          <FaUserCircle className="mb-2 text-gray-300 text-7xl" />
          <h2 className="text-lg font-semibold">Admin Profile</h2>
        </div>

        {/* Navigation Links */}
        <nav className="w-full">
          <Link to="/AdminDashboard" className="w-full">
            <button className="flex items-center w-full px-6 py-3 my-2 text-left transition-all duration-300 ease-in-out bg-gray-700 rounded-lg hover:bg-gray-600 hover:scale-105 hover:shadow-md">
              <FaTachometerAlt className="mr-4 text-xl" /> Dashboard
            </button>
          </Link>
          <Link to="/Shoplist" className="w-full">
            <button className="flex items-center w-full px-6 py-3 my-2 text-left transition-all duration-300 ease-in-out bg-gray-700 rounded-lg hover:bg-gray-600 hover:scale-105 hover:shadow-md">
              <FaStore className="mr-4 text-xl" /> Shop List
            </button>
          </Link>
          <Link to="/Customerlist" className="w-full">
            <button className="flex items-center w-full px-6 py-3 my-2 text-left transition-all duration-300 ease-in-out bg-gray-700 rounded-lg hover:bg-gray-600 hover:scale-105 hover:shadow-md">
              <FaUserCircle className="mr-4 text-xl" /> Customer Profiles
            </button>
          </Link>
          <Link to="/MyOrders" className="w-full">
            <button className="flex items-center w-full px-6 py-3 my-2 text-left transition-all duration-300 ease-in-out bg-gray-700 rounded-lg hover:bg-gray-600 hover:scale-105 hover:shadow-md">
              <FaListAlt className="mr-4 text-xl" /> Order List
            </button>
          </Link>
          <Link to="/EditProfile" className="w-full">
            <button className="flex items-center w-full px-6 py-3 my-2 text-left transition-all duration-300 ease-in-out bg-gray-700 rounded-lg hover:bg-gray-600 hover:scale-105 hover:shadow-md">
              <FaEdit className="mr-4 text-xl" /> Actions
            </button>
          </Link>
          <Link to="/EditProfile" className="w-full">
            <button className="flex items-center w-full px-6 py-3 my-2 text-left transition-all duration-300 ease-in-out bg-gray-700 rounded-lg hover:bg-gray-600 hover:scale-105 hover:shadow-md">
              <FaEdit className="mr-4 text-xl" /> Advertisments
            </button>
          </Link>
        </nav>

        {/* Logout Button */}
        <button onClick = {handleLogout} className="flex items-center w-full px-6 py-3 text-left transition-all duration-300 ease-in-out bg-red-600 rounded-lg hover:bg-red-500 hover:scale-105 hover:shadow-md">
          <FaSignOutAlt className="mr-4 text-xl" /> Log Out
        </button>
      </div>
    </div>
  );
}

export default AdminNavbar;
