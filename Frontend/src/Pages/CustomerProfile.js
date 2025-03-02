import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';
import CustomerNavbar from '../Components/Body/CustomerNavbar';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from '../Storage/Auth/UserAction';
import Swal from 'sweetalert2';

function CustomerProfile() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const state = useSelector((state) => state)
  console.log("Redux state:",state)

  const { auth } = useSelector(state => state)
  const jwt = localStorage.getItem("jwt")

  const [followedShops, setFollowedShops] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [successPercentage, setSuccessPercentage] = useState(60); // Sample success percentage
  const [monthlyCosts, setMonthlyCosts] = useState([]);


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
          navigate("/HomePage"); // Update with your actual register route
        }
      });
    } else {
      dispatch(getUserProfile());
    }


    // Sample data for display
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

    // Set the sample data to state
    setFollowedShops(sampleShops);
    setMonthlyCosts(sampleMonthlyCosts);
  }, [jwt,navigate,dispatch]);

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


  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <CustomerNavbar />
        {/* Main Content */}
        <div className="flex-grow p-6">
          {/* Followed Shops Slider */}
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-lg font-bold">Followed Shops</h2>
            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={handlePrev}
                className="p-2 border rounded-full"
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
                    className="w-12 h-12 rounded-full"
                  />
                ))}
              </div>
              <button
                onClick={handleNext}
                className="p-2 border rounded-full"
                aria-label="Next"
              >
                &gt;
              </button>
            </div>
          </div>

          {/* Complete Orders and Monthly Cost */}
          <div className="grid grid-cols-2 gap-6 ">
            {/* Complete Orders */}
            <div className="p-4 border border-gray-200 rounded-lg shadow-md">
              <h3 className="mb-2 font-semibold text-md">Complete Orders</h3>
              <div className="relative w-32 h-32 mx-auto">
                <svg viewBox="0 0 36 36" className="w-full h-full">
                  <path
                    className="text-gray-200"
                    strokeWidth="4"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845
                       a 15.9155 15.9155 0 0 1 0 31.831
                       a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-blue-500"
                    strokeWidth="4"
                    strokeDasharray={`${successPercentage}, 100`}
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845
                       a 15.9155 15.9155 0 0 1 0 31.831
                       a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-bold">{successPercentage}%</span>
                </div>
              </div>
            </div>

           {/* Monthly Cost */}
<div className="p-2 bg-white border border-gray-200 rounded-lg shadow-md">
  <h3 className="mb-4 font-semibold text-md">Monthly Expenses</h3>
  <div className="space-y-3 overflow-y-auto max-h-32">
    {monthlyCosts.map((cost, index) => (
      <div key={index} className="flex items-center justify-between p-3 transition-all rounded-md shadow-sm bg-gray-50 hover:bg-gray-100">
        <div className="flex items-center">
          <img
            src={cost.image}
            alt={cost.shopName}
            className="w-8 h-8 border border-gray-300 rounded-full shadow-sm"
          />
          <span className="ml-4 font-medium text-gray-700 text-md">{cost.shopName}</span>
        </div>
        <span className="font-semibold text-blue-600 text-md">${cost.amount}</span>
      </div>
    ))}
  </div>
  <div className="flex items-center justify-between p-4 mt-4 text-lg font-bold border-t-2 border-gray-200 rounded-b-lg bg-gradient-to-r from-gray-100 to-gray-50">
    <span className="text-gray-800">Total Spent:</span>
    <span className="text-xl text-green-600">${monthlyCosts.reduce((total, cost) => total + cost.amount, 0)}</span>
  </div>
</div>
          </div>

          {/* My Shop Button - Bottom */}
          <div className="flex justify-center mt-8">
          <Link to='/SellerDashboard'><button className="px-6 py-3 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600">
              Seller profile
            </button></Link>
            <Link to='/BusinessRegistrationForm'><button className="flex items-center px-6 py-3 mx-3 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600">
              Be A seller
            </button></Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CustomerProfile;
