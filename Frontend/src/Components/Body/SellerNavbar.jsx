import React from "react";
import { FaUserCircle, FaTachometerAlt, FaShoppingCart, FaPlus, FaList, FaCog, FaSignOutAlt,FaStore } from "react-icons/fa";
import { Link } from "react-router-dom";

function SellerNavbar() {
  return (
    <div className="flex justify-center min-h-screen bg-gray-100">
      {/* Sidebar with improved styling */}
      <div className="flex flex-col items-center p-6 space-y-5 text-white bg-gray-800 shadow-lg w-80">
        {/* User Profile */}
        <div className="flex flex-col items-center">
          <FaUserCircle className="mb-2 text-gray-300 text-7xl" />
          <h2 className="text-lg font-semibold">Seller Panel</h2>
        </div>

        {/* Navigation Links */}
        <nav className="w-full">
          <Link to="/SellerDashboard" className="w-full">
            <button className="flex items-center w-full px-4 py-3 my-2 text-left transition-all duration-300 ease-in-out bg-gray-700 rounded-lg hover:bg-gray-600 hover:scale-105 hover:shadow-md">
              <FaTachometerAlt className="mr-3 text-lg" /> Dashboard
            </button>
          </Link>
          <Link to="/SellerOrders" className="w-full">
            <button className="flex items-center w-full px-4 py-3 my-2 text-left transition-all duration-300 ease-in-out bg-gray-700 rounded-lg hover:bg-gray-600 hover:scale-105 hover:shadow-md">
              <FaShoppingCart className="mr-3 text-lg" /> Orders
            </button>
          </Link>
          <Link to="/AddItems" className="w-full">
            <button className="flex items-center w-full px-4 py-3 my-2 text-left transition-all duration-300 ease-in-out bg-gray-700 rounded-lg hover:bg-gray-600 hover:scale-105 hover:shadow-md">
              <FaPlus className="mr-3 text-lg" /> Add Items
            </button>
          </Link>
          <Link to="/ItemList" className="w-full">
            <button className="flex items-center w-full px-4 py-3 my-2 text-left transition-all duration-300 ease-in-out bg-gray-700 rounded-lg hover:bg-gray-600 hover:scale-105 hover:shadow-md">
              <FaList className="mr-3 text-lg" /> Item List
            </button>
          </Link>
          <Link to="/ShopSettings" className="w-full">
          <button className="flex items-center w-full px-4 py-3 my-2 text-left transition-all duration-300 ease-in-out bg-gray-700 rounded-lg hover:bg-gray-600 hover:scale-105 hover:shadow-md">
          <FaCog className="mr-3 text-lg" /> Settings
            </button>
          </Link>

          <Link to="/MyShop" className="w-full">
          <button className="flex items-center w-full px-4 py-3 my-2 text-left transition-all duration-300 ease-in-out bg-gray-700 rounded-lg hover:bg-gray-600 hover:scale-105 hover:shadow-md">
          <FaStore className="mr-2" /> My Shop
            </button>
            </Link>
        </nav>

        
      </div>
    </div>
  );
}

export default SellerNavbar;
