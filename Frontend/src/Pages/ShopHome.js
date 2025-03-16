import React from 'react';
import FollowerCard from '../Components/Body/FollowerCard';
import Navbar from '../Components/Header/Navbar';

function ShopHome() {
  // Variable to store the about section text
  const aboutText = "Sara Fashion is a stylish e-commerce seller that offers high quality fashion products for women. Our curated collection embraces modern trends and timeless elegance. Each item is crafted with passion and a focus on quality, ensuring every customer feels confident. Shop with Sara Fashion now for a unique style experience.";

  return (
    <div>
      <Navbar />
      <FollowerCard />
      
      {/* About Section */}
      <div className="p-6">
        <h2 className="mb-2 text-xl font-semibold">About me</h2>
        <p className="text-gray-700">{aboutText}</p>
        <button className="px-4 py-2 mt-4 text-white bg-purple-700 rounded-lg">Contact</button>
      </div>
      <h1 className='text-[50px] pt-10 font-semibold pl-[120px]'>THIS PAGE IS IN UNDER CONSTRUCTION</h1>
    </div>
  );
}

export default ShopHome;
