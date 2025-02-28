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

function CustomerNavbar() {
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
        <Link to="/MyOrders" className="w-full">
          <button className="flex items-center justify-start w-full px-4 py-2 text-center transition-all duration-300 ease-in-out bg-[#848ccf] text-white rounded-lg hover:bg-[#6a73b5] hover:scale-105 hover:shadow-lg pl-6">
            <FaListAlt className="mr-2" /> Order List
          </button>
        </Link>
        <Link to="/EditProfile" className="w-full">
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
        <button onClick = {handleLogout} className="flex items-center justify-start w-full px-4 py-2 text-center transition-all duration-300 ease-in-out bg-[#848ccf] text-white rounded-lg hover:bg-[#6a73b5] hover:scale-105 hover:shadow-lg pl-6">
          <FaSignOutAlt className="mr-2" /> Log Out
        </button>
      </div>
    </div>
  );
}

export default CustomerNavbar;
