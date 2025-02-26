import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from "react-router-dom";

function CustomerNavbar() {
  return (
    <div className="flex justify-center min-h-screen bg-gray-100">
      {/* Sidebar with increased width */}
      <div className="flex flex-col items-center p-4 space-y-4 bg-gray-300 rounded-lg w-96">
        <FaUserCircle className="mb-4 text-6xl" />
        <Link to='/CustomerProfile' className="w-full"><button className="w-full px-4 py-2 text-center transition-all duration-300 ease-in-out bg-gray-400 rounded-lg hover:bg-gray-500 hover:scale-105 hover:shadow-lg">Dashboard</button></Link>
        <Link to='/Favourites' className="w-full"><button className="w-full px-4 py-2 text-center transition-all duration-300 ease-in-out bg-gray-400 rounded-lg hover:bg-gray-500 hover:scale-105 hover:shadow-lg">Favorites</button></Link>
        <Link to='/CartPage' className="w-full"><button className="w-full px-4 py-2 text-center transition-all duration-300 ease-in-out bg-gray-400 rounded-lg hover:bg-gray-500 hover:scale-105 hover:shadow-lg">My Cart</button></Link>
        <Link to='/MyOrders' className="w-full"><button className="w-full px-4 py-2 text-center transition-all duration-300 ease-in-out bg-gray-400 rounded-lg hover:bg-gray-500 hover:scale-105 hover:shadow-lg">Order List</button></Link>
        <Link to='/EditProfile' className="w-full"><button className="w-full px-4 py-2 text-center transition-all duration-300 ease-in-out bg-gray-400 rounded-lg hover:bg-gray-500 hover:scale-105 hover:shadow-lg">Edit Profile</button></Link>
        <button className="w-full px-4 py-2 text-center transition-all duration-300 ease-in-out bg-gray-400 rounded-lg hover:bg-gray-500 hover:scale-105 hover:shadow-lg">Log Out</button>
      </div>
      
    </div>
  );
}

export default CustomerNavbar;
