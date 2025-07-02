import React from "react";
import {
  FiHome,
  FiHeart,
  FiShoppingCart,
  FiEdit,
  FiShoppingBag,
  FiChevronRight
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function CustomerNavbar() {
  const { auth } = useSelector(state => state);
  const isSeller = auth?.user?.isSeller;

  const navItems = [
    { path: "/CustomerProfile", icon: <FiHome size={20} />, label: "Dashboard" },
    { path: "/Favourites", icon: <FiHeart size={20} />, label: "Favorites" },
    { path: "/CartPage", icon: <FiShoppingCart size={20} />, label: "My Cart" },
    { path: "/EditProfile", icon: <FiEdit size={20} />, label: "Edit Profile" },
    // Only show "Seller Profile" if user is a seller
    ...(isSeller ? [{ path: "/SellerDashboard", icon: <FiShoppingBag size={20} />, label: "Seller Profile" }] : []),
    // Only show "Become a Seller" if user is not a seller
    ...(!isSeller ? [{ path: "/BusinessRegistrationForm", icon: <FiShoppingBag size={20} />, label: "Become a Seller" }] : [])
  ];

  return (
    <div className="flex h-full">
      <div className="flex flex-col w-64 min-h-screen p-6 border-r border-gray-700 bg-gradient-to-t from-black to-gray-800">
        <nav className="flex-1 space-y-2">
          {navItems.map((item, index) => (
            <Link
              key={`nav-${index}`}
              to={item.path}
              className="flex items-center justify-between px-4 py-3 rounded-lg transition-colors group text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              <div className="flex items-center">
                <span className="group-hover:text-white transition-colors">
                  {item.icon}
                </span>
                <span className="ml-3 font-medium">{item.label}</span>
              </div>
              <FiChevronRight className="text-gray-400 group-hover:text-white transition-colors" />
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default CustomerNavbar;
