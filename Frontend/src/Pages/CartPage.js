import React from 'react';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';
import Cart from '../Components/Body/Cart/Cart';

function CartPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r from-gray-50 to-white px-6 py-4 border-b border-gray-100">
            <h1 className="text-2xl font-bold text-gray-800">Your Shopping Cart</h1>
            <p className="text-sm text-gray-500 mt-1">Review and manage your items</p>
          </div>

          <div className="p-6">
            <Cart />
          </div>

          <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 flex justify-end">
            {/* Checkout button or other footer actions */}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default CartPage;
