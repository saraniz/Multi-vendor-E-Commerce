import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import SellerNavbar from "../Components/Body/SellerNavbar";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { HiOutlineUser, HiOutlineSun } from "react-icons/hi";
import { Link } from "react-router-dom";
import { fetchOrdersForStore } from "../Storage/Store/storeAction";
import Loader from "./Loader";

function SellerDashboard() {
  const dispatch = useDispatch();
  const { orderCounts, loading: orderLoading } = useSelector((state) => state.store);

  const [categorySalesData, setCategorySalesData] = useState([]);
  const [monthlyRevenueData, setMonthlyRevenueData] = useState([]);
  const [totalRevenue, setTotalRevenue] = useState(0);

  const [greeting, setGreeting] = useState("");
  const [greetingIcon, setGreetingIcon] = useState(<HiOutlineSun />);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good Morning");
    else if (hour < 18) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");
  }, []);

  useEffect(() => {
    dispatch(fetchOrdersForStore()).then((data) => {
      if (!data) return;

      // Expecting data.categorySales and data.monthlyRevenue from backend
      if (data.categorySales) {
        // Convert {category: quantity} to array
        const arr = Object.entries(data.categorySales).map(([category, sold]) => ({
          category,
          sold,
        }));
        setCategorySalesData(arr);
      }

      if (data.monthlyRevenue) {
        // Convert {month: revenue} to array sorted by month asc
        const arr = Object.entries(data.monthlyRevenue)
          .map(([month, revenue]) => ({ month, revenue }))
          .sort((a, b) => a.month.localeCompare(b.month));
        setMonthlyRevenueData(arr);

        // Total revenue sum
        const total = arr.reduce((sum, item) => sum + item.revenue, 0);
        setTotalRevenue(total);
      }
    });
  }, [dispatch]);

  if (orderLoading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      <div className="flex flex-1">
        <SellerNavbar />
        <main className="flex-1 p-6 overflow-hidden">
          <div className="flex items-center mb-4">
            {greetingIcon}
            <h1 className="ml-2 text-2xl font-bold text-gray-800">{greeting}, Seller!</h1>
          </div>

          {/* Order Counts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="p-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-white">Shipped Orders</h3>
              <p className="text-3xl font-bold text-white">
                {orderLoading ? "Loading..." : orderCounts?.shipped || 0}
              </p>
            </div>
            <div className="p-6 bg-gradient-to-r from-red-500 to-red-600 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-white">Pending Orders</h3>
              <p className="text-3xl font-bold text-white">
                {orderLoading ? "Loading..." : orderCounts?.pending || 0}
              </p>
            </div>
            <div className="p-6 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-white">New Orders</h3>
              <p className="text-3xl font-bold text-white">
                {orderLoading ? "Loading..." : orderCounts?.new || 0}
              </p>
            </div>
          </div>

          {/* Sales Chart */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-2">Product Sales Overview</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={categorySalesData}
                  margin={{ top: 20, right: 20, left: 20, bottom: 10 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                  <XAxis
                    dataKey="category"
                    angle={-10}
                    textAnchor="end"
                    height={50}
                    stroke="#666"
                  />
                  <YAxis stroke="#666" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#fff",
                      borderRadius: "8px",
                      border: "none",
                    }}
                  />
                  <Bar dataKey="sold" fill="#3b82f6" barSize={40} radius={[10, 10, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Monthly Revenue */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Monthly Revenue</h3>
              <div className="overflow-y-auto border-t border-b border-gray-200 max-h-48">
                {monthlyRevenueData.map((item, index) => (
                  <div key={index} className="flex justify-between p-3">
                    <span>{item.month}</span>
                    <span className="font-semibold text-blue-600">Rs. {item.revenue.toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between p-3 mt-4 font-semibold bg-gray-100 rounded">
                <span>Total</span>
                <span>Rs. {totalRevenue.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Add Customer Profile Card/Button */}
          <div className="mt-8 flex justify-end">
            <Link
              to="/CustomerProfile"
              className="inline-flex items-center px-5 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
            >
              <HiOutlineUser className="mr-2 text-xl" />
              Customer Profile
            </Link>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default SellerDashboard;
