import React from 'react';
import Navbar from '../Components/Header/Navbar'
import Footer from '../Components/Footer/Footer'
import CustomerNavbar from '../Components/Body/CustomerNavbar';
import { Link } from "react-router-dom";

function CustomerProfile() {
  return (
    <div>
      <Navbar/>
    <div className="flex min-h-screen p-4 bg-gray-100">
      {/* Sidebar */}
    <CustomerNavbar/>

      {/* Main Content */}
      <div className="flex-grow p-4">
        {/* Followed Shops */}
        <div className='flex flex-col items-center space-y-10'>
        <div className="w-full px-4 py-1 text-3xl font-bold text-center ">Dashboard</div>
          <h2 className="px-4 py-1 text-center text-white bg-gray-600 rounded-full max-w-44">Followed Shops</h2>
          </div>
          <div className="flex items-center justify-center pt-6 mb-6 space-x-4">
          <div className="flex space-x-2">
            {[...Array(5)].map((_, index) => (

              <Link to={'/ShopHome'}><button><img
                key={index}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpyiXYQlJYE6rBuS5BqGgFtNZmDvfjF5snFw&s" // replace with actual image URL
                alt="Shop"
                className="w-10 h-10 rounded-full"
              /></button></Link>
              
            ))}
          </div>
          
        </div>

        {/* Review and Order Buttons */}
        <div className='ml-12'>
        <button className="px-6 py-2 mb-6 text-white bg-gray-500 rounded-lg">My Orders</button>
        
        {/* Progress Bar */}
        <div className="h-4 max-w-md mb-6 bg-gray-300 rounded-full">
          <div className="w-1/3 h-4 bg-gray-700 rounded-full"></div>
        </div>
        
        <div className="mb-6 space-x-4">
        <Link to={'/SearchPage'}><button className="px-6 py-2 text-white bg-gray-500 rounded-lg ">My Reviews</button></Link></div>

      </div>
      </div>
      {/* Monthly Cost Section */}
      <div className="w-1/4 p-4 bg-gray-300 rounded-lg">
        <h3 className="mb-4 font-semibold text-center">Monthly Cost</h3>
        <div className="space-y-4">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex items-center justify-between">
              <img
                src="https://via.placeholder.com/30" // replace with actual image URL
                alt="Product"
                className="w-8 h-8 rounded-full"
              />
              <span>.................40$</span>
            </div>
          ))}
        </div>
        <div className="mt-4 font-bold text-right">
          <span>Total 120$</span>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default CustomerProfile;
