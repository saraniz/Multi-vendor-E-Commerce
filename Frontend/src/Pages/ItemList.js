import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';
import SellerNavbar from '../Components/Body/SellerNavbar';

function ItemList() {
  const [items, setItems] = useState([]);

  // Simulate fetching data from a backend
  useEffect(() => {
    // Replace with API call
    setItems([
      { id: 1, product: 'Product 1', code: 'P001', quantity: 10, status: 'Available' },
      { id: 2, product: 'Product 2', code: 'P002', quantity: 5, status: 'Out of Stock' },
      { id: 3, product: 'Product 3', code: 'P003', quantity: 15, status: 'Available' },
      { id: 4, product: 'Product 4', code: 'P004', quantity: 7, status: 'Limited' },
    ]);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <SellerNavbar />
        
        {/* Main Content */}
        <div className="flex-1 p-6">
          <h2 className="mb-4 text-2xl font-bold">Item List</h2>
          <div className="overflow-hidden bg-white rounded-lg shadow-md">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-3 border">Product</th>
                  <th className="p-3 border">Product Code</th>
                  <th className="p-3 border">Quantity</th>
                  <th className="p-3 border">Status</th>
                </tr>
              </thead>
              <tbody>
                {items.length > 0 ? (
                  items.map((item) => (
                    <tr key={item.id} className="border">
                      <td className="p-3 border">{item.product}</td>
                      <td className="p-3 border">{item.code}</td>
                      <td className="p-3 border">{item.quantity}</td>
                      <td className="p-3 border">{item.status}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="p-3 text-center">No items available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ItemList;
