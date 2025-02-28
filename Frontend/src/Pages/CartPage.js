import React, { useState,useEffect } from 'react';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';
import CustomerNavbar from '../Components/Body/CustomerNavbar';
import Cart from '../Components/Body/Cart/Cart';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function CartPage() {

  const navigate = useNavigate()
  const { auth } = useSelector(state => state)

  useEffect(() => {
    if (!auth.user) {
      Swal.fire({
        title: "Login Required",
        text: "You need to log in to access your cart.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Login",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/LoginPage");
        } else {
          navigate("/HomePage");
        }
      });
    }
  }, [auth, navigate]);

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
