import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

function CustomerNavbar() {
  return (
    <div className="flex justify-center min-h-screen bg-gray-100">
      {/* Sidebar with increased width */}
      <div className="w-96 bg-gray-300 p-4 rounded-lg flex flex-col items-center space-y-4">
        <FaUserCircle className="text-6xl mb-4" />
        <button className="bg-gray-600 text-white py-2 px-4 w-full rounded-lg text-center ">Dashboard</button>
        <button className="bg-gray-400 py-2 px-4 w-full rounded-lg text-center transition-all duration-300 ease-in-out hover:bg-gray-500 hover:scale-105 hover:shadow-lg">Favorites</button>
        <button className="bg-gray-400 py-2 px-4 w-full rounded-lg text-center transition-all duration-300 ease-in-out hover:bg-gray-500 hover:scale-105 hover:shadow-lg">My Cart</button>
        <button className="bg-gray-400 py-2 px-4 w-full rounded-lg text-center transition-all duration-300 ease-in-out hover:bg-gray-500 hover:scale-105 hover:shadow-lg">Order List</button>
        <button className="bg-gray-400 py-2 px-4 w-full rounded-lg text-center transition-all duration-300 ease-in-out hover:bg-gray-500 hover:scale-105 hover:shadow-lg">Contact Admin</button>
        <button className="bg-gray-400 py-2 px-4 w-full rounded-lg text-center transition-all duration-300 ease-in-out hover:bg-gray-500 hover:scale-105 hover:shadow-lg">Settings</button>
        <button className="bg-gray-400 py-2 px-4 w-full rounded-lg text-center transition-all duration-300 ease-in-out hover:bg-gray-500 hover:scale-105 hover:shadow-lg">Log Out</button>
      </div>
    </div>
  );
}

export default CustomerNavbar;
