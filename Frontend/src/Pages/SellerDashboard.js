import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import SellerNavbar from "../Components/Body/SellerNavbar";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend } from "recharts";

function SellerDashboard() {
  // Sample Product Sales Data (Replace with Backend Data in Future)
  const salesData = [
    { category: "T-Shirt", sold: 750 },
    { category: "Shirt", sold: 600 },
    { category: "Trouser", sold: 450 },
    { category: "Blouse", sold: 300 },
    { category: "Jean", sold: 500 },
    { category: "Skirt", sold: 400 },
    { category: "Frock", sold: 650 },
    { category: "Short", sold: 550 },
  ];

  // Sample Monthly Revenue Data (Replace with API data later)
  const [monthlyRevenue, setMonthlyRevenue] = useState([
    { orderId: "Order 1", amount: 40 },
    { orderId: "Order 2", amount: 40 },
    { orderId: "Order 3", amount: 40 },
    { orderId: "Order 4", amount: 40 },
    { orderId: "Order 5", amount: 40 },
    { orderId: "Order 6", amount: 40 },
  ]);

  // Calculate Total Revenue
  const totalRevenue = monthlyRevenue.reduce((total, order) => total + order.amount, 0);

  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <SellerNavbar />

        {/* Main Content */}
        <div className="flex-grow px-4">
          <div className="grid grid-cols-3 gap-4">
            {/* Statistics Cards */}
            <button className="p-4 text-center bg-blue-100 rounded shadow hover:bg-blue-200">
              <h3 className="text-xl font-bold">Shipped Orders</h3>
              <p className="text-4xl text-blue-600">67</p>
            </button>
            <button className="p-4 text-center bg-red-100 rounded shadow hover:bg-red-200">
              <h3 className="text-xl font-bold">Pending Orders</h3>
              <p className="text-4xl text-red-600">09</p>
            </button>
            <button className="p-4 text-center bg-purple-100 rounded shadow hover:bg-purple-200">
              <h3 className="text-xl font-bold">New Orders</h3>
              <p className="text-4xl text-purple-600">35</p>
            </button>
          </div>

          {/* Chart & Monthly Revenue */}
          <div className="grid grid-cols-2 gap-4 mt-3 ">
            {/* Bar Chart */}
            <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-lg">
              <h3 className="mb-0 text-lg font-bold">Product Sales Overview</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={salesData} margin={{ top: 20, right: 20, left: 20, bottom: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" angle={-10} textAnchor="end" height={50} />
                  <YAxis />
                  <Tooltip contentStyle={{ backgroundColor: "#fff", borderRadius: "8px", border: "none" }} />
                  <Bar dataKey="sold" fill="url(#colorGradient)" barSize={40} radius={[10, 10, 0, 0]} />
                  <defs>
                    <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.9} />
                      <stop offset="100%" stopColor="#60a5fa" stopOpacity={0.6} />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>

           {/* Monthly Revenue Section */}
<div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow-lg">
  <h3 className="mb-4 text-lg font-bold text-gray-800">Monthly Revenue</h3>
  
  <div className="overflow-y-auto border-t border-b border-gray-200 max-h-40">
    <ul className="divide-y divide-gray-200">
      {monthlyRevenue.map((order, index) => (
        <li key={index} className="flex justify-between p-3 transition hover:bg-gray-100">
          <span className="text-gray-700">{order.orderId}</span>
          <span className="font-semibold text-blue-600">${order.amount}</span>
        </li>
      ))}
    </ul>
  </div>

  <div className="flex justify-between p-3 mt-4 font-semibold text-gray-800 rounded-md bg-gray-50">
    <span>Total</span>
    <span>${totalRevenue}</span>
  </div>
</div>

          </div>

          {/* Buttons: Go to Shop & Seller Profile */}
          <div className="mt-6 text-center">
            <Link to="/CustomerProfile">
              <button className="px-4 py-2 mr-4 text-white bg-blue-500 rounded shadow hover:bg-blue-600">
                Customer Profile
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
