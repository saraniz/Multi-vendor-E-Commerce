import React from 'react';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';
import SellerNavbar from '../Components/Body/SellerNavbar';
import { Link } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend } from 'recharts';

function SellerDashboard() {
  // Product sales data (Replace with actual backend data in the future)
  const NoOfTShirts = 750;
  const NoOfShirts = 600;
  const NoOfTrousers = 450;
  const NoOfBlouses = 300;
  const NoOfJeans = 500;
  const NoOfSkirts = 400;
  const NoOfFrocks = 650;
  const NoOfShorts = 550;

  const salesData = [
    { category: "T-Shirt", sold: NoOfTShirts },
    { category: "Shirt", sold: NoOfShirts },
    { category: "Trouser", sold: NoOfTrousers },
    { category: "Blouse", sold: NoOfBlouses },
    { category: "Jean", sold: NoOfJeans },
    { category: "Skirt", sold: NoOfSkirts },
    { category: "Frock", sold: NoOfFrocks },
    { category: "Short", sold: NoOfShorts }
  ];

  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <SellerNavbar />
        
        {/* Main Content */}
        <div className="flex-grow p-4">
          <div className="grid grid-cols-3 gap-4">
            {/* Statistics Cards as Buttons */}
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

          {/* Chart and Account Status */}
          <div className="grid grid-cols-2 gap-4 mt-3">
            {/* Bar Chart */}
            <div className="p-4 bg-white rounded-lg shadow-lg">
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

            {/* Monthly Revenue */}
            <div className="p-4 bg-white rounded-lg shadow-lg">
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