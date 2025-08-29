import React from 'react';
import Navbar from '../Components/Header/Navbar';
import CustomerNavbar from '../Components/Body/CustomerNavbar';
import Footer from '../Components/Footer/Footer';
import Cart from '../Components/Body/Cart/Cart';

function CartPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar always at top */}
      <Navbar />

      {/* Main layout: sidebar (CustomerNavbar) + Cart content */}
      <div className="container flex flex-grow px-0 py-0 mx-auto">
        {/* Left side - Customer Navbar */}
        <div className="w-64 mr-6">
          <CustomerNavbar />
        </div>

        {/* Right side - Cart Section */}
        <div className="flex-grow overflow-hidden bg-white shadow-sm rounded-xl ">
          <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
            <h1 className="text-2xl font-bold text-gray-800">Your Shopping Cart</h1>
            <p className="mt-1 text-sm text-gray-500">Review and manage your items</p>
          </div>

          <div className="p-6">
            <Cart />
          </div>

          <div className="flex justify-end px-6 py-4 border-t border-gray-100 bg-gray-50">
            {/* Checkout button or other footer actions */}
          </div>
        </div>
      </div>

      {/* Footer always at bottom */}
      <Footer />
    </div>
  );
}

export default CartPage;
