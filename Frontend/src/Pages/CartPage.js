import React, { useState } from 'react';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';
import CustomerNavbar from '../Components/Body/CustomerNavbar';
import Cart from '../Components/Body/Cart/Cart';

function CartPage() {
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
          {/* Cart Section */}
          <Cart />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CartPage;
