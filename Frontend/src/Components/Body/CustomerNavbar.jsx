import React from 'react';
import { FaUserCircle, FaHeart, FaShoppingCart, FaListAlt, FaEdit, FaSignOutAlt, FaTachometerAlt, FaStore } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function CustomerNavbar() {
  return (
    <div className="flex justify-center min-h-screen bg-white">
      {/* Sidebar */}
      <div className="flex flex-col items-center p-4 space-y-4 bg-white rounded-lg w-64 shadow-lg">
        <FaUserCircle className="mb-4 text-6xl text-gray-700" />
        <Link to="/customer-profile" className="w-full">
          <button className="flex items-center justify-start w-full px-4 py-2 text-center transition-all duration-300 ease-in-out bg-[#848ccf] text-white rounded-lg hover:bg-[#6a73b5] hover:scale-105 hover:shadow-lg pl-6">
            <FaTachometerAlt className="mr-2" /> Dashboard
          </button>
        </Link>
        <Link to="/favourites" className="w-full">
          <button className="flex items-center justify-start w-full px-4 py-2 text-center transition-all duration-300 ease-in-out bg-[#848ccf] text-white rounded-lg hover:bg-[#6a73b5] hover:scale-105 hover:shadow-lg pl-6">
            <FaHeart className="mr-2" /> Favorites
          </button>
        </Link>
        <Link to="/Cartpage" className="w-full">
          <button className="flex items-center justify-start w-full px-4 py-2 text-center transition-all duration-300 ease-in-out bg-[#848ccf] text-white rounded-lg hover:bg-[#6a73b5] hover:scale-105 hover:shadow-lg pl-6">
            <FaShoppingCart className="mr-2" /> My Cart
          </button>
        </Link>
        <Link to="/my-orders" className="w-full">
          <button className="flex items-center justify-start w-full px-4 py-2 text-center transition-all duration-300 ease-in-out bg-[#848ccf] text-white rounded-lg hover:bg-[#6a73b5] hover:scale-105 hover:shadow-lg pl-6">
            <FaListAlt className="mr-2" /> Order List
          </button>
        </Link>
        <Link to="/edit-profile" className="w-full">
          <button className="flex items-center justify-start w-full px-4 py-2 text-center transition-all duration-300 ease-in-out bg-[#848ccf] text-white rounded-lg hover:bg-[#6a73b5] hover:scale-105 hover:shadow-lg pl-6">
            <FaEdit className="mr-2" /> Edit Profile
          </button>
        </Link>
        {/* Be a Seller Button */}
        <Link to="/sellerLogin" className="w-full">
          <button className="flex items-center justify-start w-full px-4 py-2 text-center transition-all duration-300 ease-in-out bg-[#848ccf] text-white rounded-lg hover:bg-[#6a73b5] hover:scale-105 hover:shadow-lg pl-6">
            <FaStore className="mr-2" /> Be a Seller
          </button>
        </Link>
        {/* Log Out Button */}
        <button className="flex items-center justify-start w-full px-4 py-2 text-center transition-all duration-300 ease-in-out bg-[#848ccf] text-white rounded-lg hover:bg-[#6a73b5] hover:scale-105 hover:shadow-lg pl-6">
          <FaSignOutAlt className="mr-2" /> Log Out
        </button>
      </div>
    </div>
  );
}

export default CustomerNavbar;