import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import SellerNavbar from "../Components/Body/SellerNavbar";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import { HiOutlineSun, HiOutlineMoon, HiOutlineCloud, HiOutlineUser } from "react-icons/hi"; // Icons for greeting and customer profile

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
  const [monthlyRevenue] = useState([
    { orderId: "Order 1", amount: 40 },
    { orderId: "Order 2", amount: 40 },
    { orderId: "Order 3", amount: 40 },
    { orderId: "Order 4", amount: 40 },
    { orderId: "Order 5", amount: 40 },
    { orderId: "Order 6", amount: 40 },
  ]);

  // Calculate Total Revenue
  const totalRevenue = monthlyRevenue.reduce((total, order) => total + order.amount, 0);

  // Dynamic Greeting Message
  const [greeting, setGreeting] = useState("");
  const [greetingIcon, setGreetingIcon] = useState(<HiOutlineSun />);

  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();
      if (hour < 12) {
        setGreeting("Good Morning");
        setGreetingIcon(<HiOutlineSun className="w-6 h-6 text-yellow-500" />);
      } else if (hour < 18) {
        setGreeting("Good Afternoon");
        setGreetingIcon(<HiOutlineCloud className="w-6 h-6 text-blue-500" />);
      } else {
        setGreeting("Good Evening");
        setGreetingIcon(<HiOutlineMoon className="w-6 h-6 text-gray-700" />);
      }
    };

    updateGreeting();
    const interval = setInterval(updateGreeting, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      <div className="flex flex-1">
        {/* Sidebar */}
        <SellerNavbar />

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-hidden">
          {/* Greeting Message */}
          <div className="flex items-center mb-4">
            {greetingIcon}
            <h1 className="ml-2 text-2xl font-bold text-gray-800">{greeting}, Seller!</h1>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="p-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <h3 className="text-lg font-semibold text-white">Shipped Orders</h3>
              <p className="text-3xl font-bold text-white">67</p>
            </div>
            <div className="p-6 bg-gradient-to-r from-red-500 to-red-600 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <h3 className="text-lg font-semibold text-white">Pending Orders</h3>
              <p className="text-3xl font-bold text-white">09</p>
            </div>
            <div className="p-6 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <h3 className="text-lg font-semibold text-white">New Orders</h3>
              <p className="text-3xl font-bold text-white">35</p>
            </div>
          </div>

          {/* Chart & Monthly Revenue */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Bar Chart */}
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Product Sales Overview</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={salesData} margin={{ top: 20, right: 20, left: 20, bottom: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                  <XAxis dataKey="category" angle={-10} textAnchor="end" height={50} stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#fff",
                      borderRadius: "8px",
                      border: "none",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                  <Bar
                    dataKey="sold"
                    fill="url(#colorGradient)"
                    barSize={40}
                    radius={[10, 10, 0, 0]}
                  />
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
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Monthly Revenue</h3>
              <div className="overflow-y-auto border-t border-b border-gray-200 max-h-48">
                <ul className="divide-y divide-gray-200">
                  {monthlyRevenue.slice(0, 5).map((order, index) => (
                    <li
                      key={index}
                      className="flex justify-between p-3 transition-all hover:bg-gray-50 hover:shadow-sm rounded-md"
                    >
                      <span className="text-gray-700">{order.orderId}</span>
                      <span className="font-semibold text-blue-600">${order.amount}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-between p-3 mt-4 font-semibold text-gray-800 bg-gradient-to-r from-gray-100 to-gray-50 rounded-md">
                <span>Total</span>
                <span>${totalRevenue}</span>
              </div>
            </div>
          </div>

          {/* Buttons: Go to Shop & Seller Profile */}
          <div className="mt-6 flex justify-center">
            <Link to="/CustomerProfile">
              <button className="px-6 py-2 text-white bg-[#00498D] rounded-lg shadow-md hover:bg-[#003366] transition-colors transform hover:scale-105 flex items-center justify-center">
                <HiOutlineUser className="mr-2" />
                Customer Profile
              </button>
            </Link>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default SellerDashboard;