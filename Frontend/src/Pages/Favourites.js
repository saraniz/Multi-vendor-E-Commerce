import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';
import CustomerNavbar from '../Components/Body/CustomerNavbar';

function Favourites() {
  const [followedShops, setFollowedShops] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [successPercentage, setSuccessPercentage] = useState(60); // Sample success percentage
  const [monthlyCosts, setMonthlyCosts] = useState([]);

  useEffect(() => {
    // Sample data for display
    const sampleShops = [
      { id: 1, name: 'Shop A', image: 'https://via.placeholder.com/50' },
      { id: 2, name: 'Shop B', image: 'https://via.placeholder.com/50' },
      { id: 3, name: 'Shop C', image: 'https://via.placeholder.com/50' },
      { id: 4, name: 'Shop D', image: 'https://via.placeholder.com/50' },
      { id: 5, name: 'Shop E', image: 'https://via.placeholder.com/50' },
      { id: 6, name: 'Shop F', image: 'https://via.placeholder.com/50' },
    ];

    const sampleMonthlyCosts = [
      { shopName: 'Shop A', amount: 120, image: 'https://via.placeholder.com/40' },
      { shopName: 'Shop B', amount: 80, image: 'https://via.placeholder.com/40' },
      { shopName: 'Shop C', amount: 50, image: 'https://via.placeholder.com/40' },
    ];

    // Set the sample data to state
    setFollowedShops(sampleShops);
    setMonthlyCosts(sampleMonthlyCosts);
  }, []);

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
          <div className="grid grid-cols-2 gap-6">
            {/* Complete Orders */}
            <div className="p-4 bg-white rounded-lg shadow">
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
            <div className="p-4 bg-gray-100 rounded-lg shadow">
              <h3 className="mb-4 font-semibold text-md">Monthly Cost</h3>
              {monthlyCosts.map((cost, index) => (
                <div key={index} className="flex items-center justify-between mb-2">
                  <img
                    src={cost.image}
                    alt={cost.shopName}
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="font-medium text-md">${cost.amount}</span>
                </div>
              ))}
              <div className="flex items-center justify-between mt-4 font-bold">
                <span>Total</span>
                <span>
                  $
                  {monthlyCosts.reduce((total, cost) => total + cost.amount, 0)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Favourites;
