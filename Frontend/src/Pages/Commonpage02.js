import React, { useState } from 'react';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';
import CustomerNavbar from '../Components/Body/CustomerNavbar';

function Commonpage02() {
  // Example data, replace with backend API data
  const [orders, setOrders] = useState([
    {
      id: 1,
      productImage: 'https://via.placeholder.com/50', // Replace with actual URL
      productName: 'Gents trouser dark navy blue',
      shopName: 'Kaveeee Fashion',
      productKey: '30DFRR1',
      quantity: 1,
      status: 'Shipped',
    },
    {
      id: 2,
      productImage: 'https://via.placeholder.com/50',
      productName: 'Gents trouser dark navy blue',
      shopName: 'Kaveeee Fashion',
      productKey: '30DFRR1',
      quantity: 1,
      status: 'Shipped',
    },
    {
      id: 3,
      productImage: 'https://via.placeholder.com/50',
      productName: 'Gents trouser dark navy blue',
      shopName: 'Kaveeee Fashion',
      productKey: '30DFRR1',
      quantity: 1,
      status: 'Shipped',
    },
  ]);

  // Tab states
  const [activeTab, setActiveTab] = useState('All');

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-grow">
        {/* Sidebar */}
        <CustomerNavbar className="w-1/4 bg-gray-100" />

        {/* Main Content */}
        <div className="flex-grow p-4">
          {/* Page Title */}
          <h1 className="mb-4 text-2xl font-semibold">My Orders</h1>

          {/* Tabs */}
          <div className="flex mb-4 space-x-8 border-b">
            {['All', 'To receive', 'My cancellations'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 text-lg font-medium ${
                  activeTab === tab
                    ? 'border-b-2 border-black text-black'
                    : 'text-gray-500'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Orders Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-3">Product</th>
                  <th className="px-4 py-3">Product Key</th>
                  <th className="px-4 py-3">Shop</th>
                  <th className="px-4 py-3">Quantity</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-b">
                    <td className="flex items-center px-4 py-3">
                      <img
                        src={order.productImage}
                        alt="Product"
                        className="object-cover w-12 h-12 mr-4"
                      />
                      <div>
                        <p className="text-sm font-medium">{order.productName}</p>
                        <p className="text-sm text-gray-500">{order.shopName}</p>
                      </div>
                    </td>
                    <td className="px-4 py-3">{order.productKey}</td>
                    <td className="px-4 py-3">{order.shopName}</td>
                    <td className="px-4 py-3">{order.quantity}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          order.status === 'Shipped'
                            ? 'bg-green-100 text-green-600'
                            : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Commonpage02;
