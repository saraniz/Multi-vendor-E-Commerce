import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';
import SellerNavbar from '../Components/Body/SellerNavbar';

function OrderList() {
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    // Sample data for orders
    const sampleOrders = [
      {
        productImage: 'https://via.placeholder.com/64',
        productCode: 'P12345',
        quantity: 2,
        customerName: 'John Doe',
        paymentMethod: 'Credit Card',
        status: 'Shipped',
      },
      {
        productImage: 'https://via.placeholder.com/64',
        productCode: 'P67890',
        quantity: 1,
        customerName: 'Jane Smith',
        paymentMethod: 'PayPal',
        status: 'On the way',
      },
      {
        productImage: 'https://via.placeholder.com/64',
        productCode: 'P11121',
        quantity: 3,
        customerName: 'Alice Johnson',
        paymentMethod: 'Bank Transfer',
        status: 'Shipped',
      },
      {
        productImage: 'https://via.placeholder.com/64',
        productCode: 'P14151',
        quantity: 5,
        customerName: 'Bob Williams',
        paymentMethod: 'Cash on Delivery',
        status: 'On the way',
      }
    ];
    setOrders(sampleOrders);
  }, []);

  const filteredOrders = orders.filter(order => filter === 'All' || order.status === filter);

  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen">
        <SellerNavbar />
        <div className="w-full p-6">
          <h2 className="mb-4 text-2xl font-bold">Order List</h2>
          <div className="flex pb-2 space-x-6 border-b">
            <button onClick={() => setFilter('All')} className={`pb-1 font-semibold ${filter === 'All' ? 'border-b-2 border-black' : 'text-gray-500'}`}>All</button>
            <button onClick={() => setFilter('Shipped')} className={`pb-1 font-semibold ${filter === 'Shipped' ? 'border-b-2 border-black' : 'text-gray-500'}`}>Shipped</button>
            <button onClick={() => setFilter('On the way')} className={`pb-1 font-semibold ${filter === 'On the way' ? 'border-b-2 border-black' : 'text-gray-500'}`}>On the way</button>
          </div>
          <div className="mt-4">
            <table className="w-full border border-collapse border-gray-300">
              <thead>
                <tr className="text-left bg-gray-100">
                  <th className="p-2 border">Product</th>
                  <th className="p-2 border">Product Code</th>
                  <th className="p-2 border">Quantity</th>
                  <th className="p-2 border">Customer</th>
                  <th className="p-2 border">Payment Method</th>
                  <th className="p-2 border">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.length > 0 ? (
                  filteredOrders.map((order, index) => (
                    <tr key={index} className="border">
                      <td className="p-2 border"><img src={order.productImage} alt="Product" className="object-cover w-16 h-16" /></td>
                      <td className="p-2 border">{order.productCode}</td>
                      <td className="p-2 border">{order.quantity}</td>
                      <td className="p-2 border">{order.customerName}</td>
                      <td className="p-2 border">{order.paymentMethod}</td>
                      <td className="p-2 border">{order.status}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="p-4 text-center text-gray-500">No orders available</td>
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

export default OrderList;
