import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';
import SellerNavbar from '../Components/Body/SellerNavbar';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import {
  fetchOrdersForStore,
  cancelOrderBySeller,
} from '../Storage/Store/storeAction';
import Loader from './Loader';

function SellerOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(fetchOrdersForStore()).then((data) => {
      console.log('[SellerOrders] Orders data:', data); // Debug: log full data
      if (data && Array.isArray(data.orders)) {
        setOrders(data.orders);
      }
      setLoading(false);
    });
  }, [dispatch]);

  const handleCancel = async (orderId) => {
    const confirm = window.confirm('Are you sure you want to cancel this order?');
    if (!confirm) return;

    try {
      await dispatch(cancelOrderBySeller(orderId));

      // Update UI after successful cancellation
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === orderId ? { ...order, status: 'Cancelled by Seller' } : order
        )
      );
    } catch (error) {
      // Errors already handled in the action via Swal
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen">
        <SellerNavbar />
        <div className="w-full p-6">
          <h2 className="mb-4 text-2xl font-bold">Order List</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border border-collapse border-gray-300">
              <thead>
                <tr className="text-left text-white bg-gray-800">
                  <th className="p-2 border">Product</th>
                  <th className="p-2 border">Quantity</th>
                  <th className="p-2 border">Customer Name</th>
                  <th className="p-2 border">Address</th>
                  <th className="p-2 border">Mobile</th>
                  <th className="p-2 border">Courier</th>
                  <th className="p-2 border">Status</th>
                  <th className="p-2 border">Cancel</th>
                </tr>
              </thead>
              <tbody>
                {orders.length > 0 ? (
                  orders.map((order) => {
                    // Debug: log each order
                    console.log('[SellerOrders] Render order:', order);
                    return (
                      <tr key={order._id} className="border">
                        <td className="p-2 border">{order.product_id?.name || 'N/A'}</td>
                        <td className="p-2 border">{order.quantity}</td>
                        <td className="p-2 border">{
                          order.userInfo?.fullName || order.reg_id?.fullName || order.guest_name || 'N/A'
                        }</td>
                        <td className="p-2 border">{
                          order.userInfo?.address || order.reg_id?.address || order.guest_address || 'N/A'
                        }</td>
                        <td className="p-2 border">{
                          order.userInfo?.mobileNo || order.reg_id?.mobileNo || order.guest_mobile || 'N/A'
                        }</td>
                        <td className="p-2 border">{order.courier_service}</td>
                        <td className="p-2 border">{order.status || 'Pending'}</td>
                        <td className="p-2 border">
                          <button
                            className="px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600 disabled:opacity-50"
                            onClick={() => handleCancel(order._id)}
                            disabled={order.status === 'Cancelled by Seller'}
                          >
                            {order.status === 'Cancelled by Seller' ? 'Cancelled' : 'Cancel'}
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="8" className="p-4 text-center text-gray-500">
                      No orders available
                    </td>
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

export default SellerOrders;
