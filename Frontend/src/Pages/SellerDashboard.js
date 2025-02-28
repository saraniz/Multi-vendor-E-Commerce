import React from 'react';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';
import { FaTachometerAlt, FaBox, FaChartLine, FaUser, FaStore, FaSignOutAlt, FaUserCircle } from 'react-icons/fa';
import { Link } from "react-router-dom";

function SellerDashboard() {
  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div className="flex flex-col items-center p-4 space-y-4 bg-white rounded-lg w-64 shadow-lg">
          <div className="mb-4 text-6xl text-gray-700">
            <FaUserCircle />
          </div>
          <Link to='/SellerDashboard' className="w-full">
            <button className="flex items-center justify-start w-full px-4 py-2 text-center transition-all duration-300 ease-in-out bg-[#00e640] text-white rounded-lg hover:bg-green-400 hover:scale-105 hover:shadow-lg pl-6">
              <FaTachometerAlt className="mr-2" /> Dashboard
            </button>
          </Link>
          <Link to='/ShippedOrders' className="w-full">
            <button className="flex items-center justify-start w-full px-4 py-2 text-center transition-all duration-300 ease-in-out bg-[#00e640] text-white rounded-lg hover:bg-green-400 hover:scale-105 hover:shadow-lg pl-6">
              <FaBox className="mr-2" /> Shipped Orders
            </button>
          </Link>
          <Link to='/PendingOrders' className="w-full">
            <button className="flex items-center justify-start w-full px-4 py-2 text-center transition-all duration-300 ease-in-out bg-[#00e640] text-white rounded-lg hover:bg-green-400 hover:scale-105 hover:shadow-lg pl-6">
              <FaBox className="mr-2" /> Pending Orders
            </button>
          </Link>
          <Link to='/NewOrders' className="w-full">
            <button className="flex items-center justify-start w-full px-4 py-2 text-center transition-all duration-300 ease-in-out bg-[#00e640] text-white rounded-lg hover:bg-green-400 hover:scale-105 hover:shadow-lg pl-6">
              <FaBox className="mr-2" /> New Orders
            </button>
          </Link>
          <Link to='/SellerProfile' className="w-full">
            <button className="flex items-center justify-start w-full px-4 py-2 text-center transition-all duration-300 ease-in-out bg-[#00e640] text-white rounded-lg hover:bg-green-400 hover:scale-105 hover:shadow-lg pl-6">
              <FaUser className="mr-2" /> Seller Profile
            </button>
          </Link>
          <Link to='/MyShop' className="w-full">
            <button className="flex items-center justify-start w-full px-4 py-2 text-center transition-all duration-300 ease-in-out bg-[#00e640] text-white rounded-lg hover:bg-green-400 hover:scale-105 hover:shadow-lg pl-6">
              <FaStore className="mr-2" /> My Shop
            </button>
          </Link>
          {/* <button className="flex items-center justify-start w-full px-4 py-2 text-center transition-all duration-300 ease-in-out bg-[#00e640] text-white rounded-lg hover:bg-green-400 hover:scale-105 hover:shadow-lg pl-6">
            <FaSignOutAlt className="mr-2" /> Log Out
          </button> */}
        </div>

        {/* Main Content */}
        <div className="flex-grow p-4">
          <div className="grid grid-cols-3 gap-4">
            {/* Statistics Cards */}
            <div className="p-4 text-center bg-blue-100 rounded shadow">
              <h3 className="text-xl font-bold">Shipped Orders</h3>
              <p className="text-4xl text-blue-600">67</p>
            </div>
            <div className="p-4 text-center bg-red-100 rounded shadow">
              <h3 className="text-xl font-bold">Pending Orders</h3>
              <p className="text-4xl text-red-600">09</p>
            </div>
            <div className="p-4 text-center bg-purple-100 rounded shadow">
              <h3 className="text-xl font-bold">New Orders</h3>
              <p className="text-4xl text-purple-600">35</p>
            </div>
          </div>

          {/* Chart and Account Status */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            {/* Bar Chart */}
            <div className="p-4 bg-white rounded shadow">
              <h3 className="mb-2 text-lg font-bold">Account Status: <span className="text-green-500">Good</span></h3>
              <div>
                {/* Placeholder for Bar Chart */}
                <svg width="100%" height="200">
                  {/* Example Bar Chart */}
                  <rect x="10" y="50" width="40" height="150" fill="gray" />
                  <rect x="60" y="100" width="40" height="100" fill="gray" />
                  <rect x="110" y="120" width="40" height="80" fill="gray" />
                  <rect x="160" y="90" width="40" height="110" fill="gray" />
                  <rect x="210" y="60" width="40" height="140" fill="gray" />
                </svg>
              </div>
            </div>

            {/* Monthly Revenue */}
            <div className="p-4 bg-white rounded shadow">
              <h3 className="mb-4 text-lg font-bold">Monthly Revenue</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Order 1</span>
                  <span>$40</span>
                </li>
                <li className="flex justify-between">
                  <span>Order 2</span>
                  <span>$40</span>
                </li>
                <li className="flex justify-between">
                  <span>Order 3</span>
                  <span>$40</span>
                </li>
              </ul>
              <div className="flex justify-between mt-4 font-bold">
                <span>Total</span>
                <span>$120</span>
              </div>
            </div>
          </div>

          {/* Buttons: Go to Shop & Seller Profile */}
          <div className="mt-6 text-center">
            <Link to='/CustomerProfile'>
              <button className="px-4 py-2 mr-4 text-white bg-blue-600 rounded shadow hover:bg-blue-500">
                Customer profile
              </button>
            </Link>
            <Link to='/MyShop'>
              <button className="px-4 py-2 text-white bg-gray-800 rounded shadow hover:bg-gray-700">
                My Shop
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SellerDashboard;