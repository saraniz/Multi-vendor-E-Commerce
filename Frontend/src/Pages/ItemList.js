import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';
import SellerNavbar from '../Components/Body/SellerNavbar';

function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems([
      { id: 1, product: 'Product 1', code: 'P001', quantity: 10, status: 'Available' },
      { id: 2, product: 'Product 2', code: 'P002', quantity: 5, status: 'Out of Stock' },
      { id: 3, product: 'Product 3', code: 'P003', quantity: 15, status: 'Available' },
      { id: 4, product: 'Product 4', code: 'P004', quantity: 7, status: 'Limited' },
    ]);
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this item?");
    if (confirmDelete) {
      setItems(prevItems => prevItems.filter(item => item.id !== id));
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen">
        <SellerNavbar />
        <div className="flex-1 p-6">
          <h2 className="mb-4 text-2xl font-bold">Item List</h2>
          <div className="overflow-hidden bg-white rounded-lg shadow-md">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-white bg-gray-800">
                  <th className="p-3 border">Product</th>
                  <th className="p-3 border">Product Code</th>
                  <th className="p-3 border">Quantity</th>
                  <th className="p-3 border">Status</th>
                  <th className="p-3 border">Actions</th> {/* New column */}
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
                      <td className="p-3 border">
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="px-3 py-1 text-sm text-white bg-red-600 rounded hover:bg-red-700"
                        >
                          Delete Item
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="p-3 text-center">No items available</td>
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
