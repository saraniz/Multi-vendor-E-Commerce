import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';
import CustomerNavbar from '../Components/Body/CustomerNavbar';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from '../Storage/Auth/UserAction';
import Swal from 'sweetalert2';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { HiOutlineUserCircle, HiOutlineShoppingBag, HiOutlineUserAdd } from 'react-icons/hi'; // Import icons

ChartJS.register(ArcElement, Tooltip, Legend);

function CustomerProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state);
  const { auth } = useSelector(state => state);
  const jwt = localStorage.getItem("jwt");

  const [followedShops, setFollowedShops] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [successPercentage, setSuccessPercentage] = useState(60);
  const [monthlyCosts, setMonthlyCosts] = useState([]);
  const [recentActivities, setRecentActivities] = useState([]);

  useEffect(() => {
    if (!auth.user) {
      Swal.fire({
        title: "Login or Register",
        text: "You need to log in or register to continue.",
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
    } else {
      navigate("/CustomerProfile");
    }

    const sampleShops = [
      { id: 1, name: 'Shop A', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS12497t9DLWo6-xa-wqQRFdKFh-0OSwUZCfQ&s' },
      { id: 2, name: 'Shop B', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhp5hhn9RNbii41Y8wjvgWF9UOqyYKihh1cw&s' },
      { id: 3, name: 'Shop C', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxajfI2O_L2XDi8bp7uKuIrbCATwDu1EofrA&s' },
      { id: 4, name: 'Shop D', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRraPTdnA9jhvj69HW2tiwJrNnxxnfb2Pm5_g&s' },
      { id: 5, name: 'Shop E', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEwPH6-25Hs055SvThklDXy3-vBFHMJ_7U2g&s' },
      { id: 6, name: 'Shop F', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnlkDM_rm4CQmJrffCzh9n6K8p21zDbqBNPiGI_B1sUq8ndYUB-4lap9FbtvXBWw7ztwE&usqp=CAU' },
    ];

    const sampleMonthlyCosts = [
      { shopName: 'Shop A', amount: 120, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS12497t9DLWo6-xa-wqQRFdKFh-0OSwUZCfQ&s' },
      { shopName: 'Shop B', amount: 80, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhp5hhn9RNbii41Y8wjvgWF9UOqyYKihh1cw&s' },
      { shopName: 'Shop C', amount: 50, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxajfI2O_L2XDi8bp7uKuIrbCATwDu1EofrA&s' },
      { shopName: 'Shop D', amount: 40, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRraPTdnA9jhvj69HW2tiwJrNnxxnfb2Pm5_g&s' },
      { shopName: 'Shop E', amount: 100, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEwPH6-25Hs055SvThklDXy3-vBFHMJ_7U2g&s' },
      { shopName: 'Shop F', amount: 60, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnlkDM_rm4CQmJrffCzh9n6K8p21zDbqBNPiGI_B1sUq8ndYUB-4lap9FbtvXBWw7ztwE&usqp=CAU' }
    ];

    const sampleRecentActivities = [
      { id: 1, activity: 'Ordered from Shop A', date: '2023-10-01' },
      { id: 2, activity: 'Followed Shop B', date: '2023-10-02' },
      { id: 3, activity: 'Reviewed Shop C', date: '2023-10-03' },
      { id: 4, activity: 'Cancelled order from Shop D', date: '2023-10-04' },
      { id: 5, activity: 'Received order from Shop E', date: '2023-10-05' },
    ];

    setFollowedShops(sampleShops);
    setMonthlyCosts(sampleMonthlyCosts);
    setRecentActivities(sampleRecentActivities);
  }, [jwt, auth]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? followedShops.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === followedShops.length - 1 ? 0 : prevIndex + 1
    );
  };

  const data = {
    labels: ['Completed', 'Pending', 'Cancelled'],
    datasets: [
      {
        label: 'Orders',
        data: [60, 30, 10],
        backgroundColor: ['#4F46E5', '#FBBF24', '#EF4444'],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="bg-gray-50">
      <Navbar />
      <div className="flex min-h-screen">
        <CustomerNavbar />
        <div className="flex-grow p-6">
          {/* Welcome Back Message with Icon */}
          <div className="flex items-center mb-8">
            <HiOutlineUserCircle className="w-10 h-10 text-blue-500" /> {/* Icon */}
            <h1 className="ml-4 text-2xl font-bold text-gray-800">
              Welcome Back, {auth.user?.name || "Customer"}!
            </h1>
          </div>

          {/* Followed Shops Slider */}
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">Followed Shops</h2>
            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={handlePrev}
                className="p-2 text-white bg-blue-500 rounded-full shadow-md hover:bg-blue-600"
                aria-label="Previous"
              >
                &lt;
              </button>
              <div className="flex space-x-2">
                {followedShops.slice(currentIndex, currentIndex + 5).map((shop) => (
                  <img
                    key={shop.id}
                    src={shop.image}
                    alt={shop.name}
                    className="w-12 h-12 rounded-full shadow-md"
                  />
                ))}
              </div>
              <button
                onClick={handleNext}
                className="p-2 text-white bg-blue-500 rounded-full shadow-md hover:bg-blue-600"
                aria-label="Next"
              >
                &gt;
              </button>
            </div>
          </div>

          {/* Complete Orders, Monthly Expenses, and Recent Activity */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Complete Orders */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-4 text-xl font-bold text-gray-800">Complete Orders</h3>
              <div className="w-64 h-64 mx-auto"> {/* Increased size */}
                <Doughnut data={data} />
              </div>
            </div>

            {/* Monthly Expenses */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-4 text-xl font-bold text-gray-800">Monthly Expenses</h3>
              <div className="space-y-3 overflow-y-auto max-h-48">
                {monthlyCosts.map((cost, index) => (
                  <div key={index} className="flex items-center justify-between p-3 transition-all rounded-md shadow-sm bg-gray-50 hover:bg-gray-100">
                    <div className="flex items-center">
                      <img
                        src={cost.image}
                        alt={cost.shopName}
                        className="w-8 h-8 border border-gray-300 rounded-full shadow-sm"
                      />
                      <span className="ml-4 font-medium text-gray-700">{cost.shopName}</span>
                    </div>
                    <span className="font-semibold text-blue-600">${cost.amount}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between p-4 mt-4 text-lg font-bold border-t-2 border-gray-200 rounded-b-lg bg-gradient-to-r from-gray-100 to-gray-50">
                <span className="text-gray-800">Total Spent:</span>
                <span className="text-xl text-green-600">${monthlyCosts.reduce((total, cost) => total + cost.amount, 0)}</span>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-4 text-xl font-bold text-gray-800">Recent Activity</h3>
              <div className="space-y-3 overflow-y-auto max-h-48">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="p-3 transition-all rounded-md shadow-sm bg-gray-50 hover:bg-gray-100">
                    <p className="text-sm text-gray-700">{activity.activity}</p>
                    <p className="text-xs text-gray-500">{activity.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Seller Profile and Be A Seller Buttons */}
          <div className="flex justify-center mt-8">
            {auth.user?.isSeller && (
              <Link to='/SellerDashboard'>
                <button className="flex items-center px-6 py-3 mx-3 text-white bg-[#00498D] rounded-lg shadow-md hover:bg-[#003366] hover:scale-105 transform transition-all duration-300 w-48 justify-center">
                  <HiOutlineShoppingBag className="w-5 h-5 mr-2" /> {/* Icon */}
                  Seller Profile
                </button>
              </Link>
            )}
            <Link to='/BusinessRegistrationForm'>
              <button className="flex items-center px-6 py-3 mx-3 text-white bg-[#00498D] rounded-lg shadow-md hover:bg-[#003366] hover:scale-105 transform transition-all duration-300 w-48 justify-center">
                <HiOutlineUserAdd className="w-5 h-5 mr-2" /> {/* Icon */}
                Be A Seller
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CustomerProfile;