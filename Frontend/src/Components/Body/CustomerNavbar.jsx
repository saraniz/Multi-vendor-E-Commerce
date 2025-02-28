import React from "react";
import { FaUserCircle, FaHeart, FaShoppingCart, FaListAlt, FaEdit, FaSignOutAlt, FaTachometerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function CustomerNavbar() {
  return (
    <div className="flex justify-center min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="flex flex-col items-center p-6 space-y-5 text-white bg-gray-800 shadow-lg w-80">
        {/* User Profile */}
        <div className="flex flex-col items-center">
          <FaUserCircle className="mb-2 text-gray-300 text-7xl" />
          <h2 className="text-lg font-semibold">Customer Panel</h2>
        </div>

        {/* Navigation Links */}
        <nav className="w-full">
          <Link to="/CustomerProfile" className="w-full">
            <button className="flex items-center w-full px-6 py-3 my-2 text-left transition-all duration-300 ease-in-out bg-gray-700 rounded-lg hover:bg-gray-600 hover:scale-105 hover:shadow-md">
              <FaTachometerAlt className="mr-4 text-xl" /> Dashboard
            </button>
          </Link>
          <Link to="/Favourites" className="w-full">
            <button className="flex items-center w-full px-6 py-3 my-2 text-left transition-all duration-300 ease-in-out bg-gray-700 rounded-lg hover:bg-gray-600 hover:scale-105 hover:shadow-md">
              <FaHeart className="mr-4 text-xl" /> Favorites
            </button>
          </Link>
          <Link to="/CartPage" className="w-full">
            <button className="flex items-center w-full px-6 py-3 my-2 text-left transition-all duration-300 ease-in-out bg-gray-700 rounded-lg hover:bg-gray-600 hover:scale-105 hover:shadow-md">
              <FaShoppingCart className="mr-4 text-xl" /> My Cart
            </button>
          </Link>
          <Link to="/MyOrders" className="w-full">
            <button className="flex items-center w-full px-6 py-3 my-2 text-left transition-all duration-300 ease-in-out bg-gray-700 rounded-lg hover:bg-gray-600 hover:scale-105 hover:shadow-md">
              <FaListAlt className="mr-4 text-xl" /> Order List
            </button>
          </Link>
          <Link to="/EditProfile" className="w-full">
            <button className="flex items-center w-full px-6 py-3 my-2 text-left transition-all duration-300 ease-in-out bg-gray-700 rounded-lg hover:bg-gray-600 hover:scale-105 hover:shadow-md">
              <FaEdit className="mr-4 text-xl" /> Edit Profile
            </button>
          </Link>
        </nav>

        {/* Logout Button */}
        <button className="flex items-center w-full px-6 py-3 text-left transition-all duration-300 ease-in-out bg-red-600 rounded-lg hover:bg-red-500 hover:scale-105 hover:shadow-md">
          <FaSignOutAlt className="mr-4 text-xl" /> Log Out
        </button>
      </div>
    </div>
  );
}

export default CustomerNavbar;
