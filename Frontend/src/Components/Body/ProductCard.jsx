import React from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom";

const ProductCard = () => {

  const itemName="Red Frock";
  const shopname="D-Mart";

  return (
    <div className="w-64 p-4 border rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:bg-gray-100 hover:scale-105 hover:shadow-lg">
      {/* Product Image */}
      <div className="relative">
      <Link to={'/Productpage'}><img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpyiXYQlJYE6rBuS5BqGgFtNZmDvfjF5snFw&s"
          alt="Product"
          className="object-cover w-full h-40 rounded-lg"
        /></Link>

        <div className="absolute bottom-0 left-0 w-full px-4 py-2 text-white bg-gradient-to-r from-black to-transparent">
          <p className="font-semibold">{itemName}</p>
        </div>
        {/* Icons for like and cart */}
        <div className="absolute bottom-0 right-0 flex p-2 space-x-2">
          <button className=''><FaHeart className="text-white" /></button>
          <button className=''><FaShoppingCart className="text-white" /></button>
        </div>
      </div>

      {/* Product Information */}
      <Link to={'/Productpage'}><div className="mt-3">
        <a href=''><p className="text-gray-600 truncate">Gents trouser dark navy...</p></a>
        <p className="text-xl font-bold">3800 LKR</p>
      </div></Link>
      

      {/* Seller Information */}
      <div className="flex items-center mt-3">
        
        <Link to={'/ShopHome'}><img
          src="https://via.placeholder.com/40"
          alt="Seller"
          className="w-10 h-10 rounded-full"
        /></Link>

        <Link to={'/ShopHome'}><p className="ml-3 text-sm font-semibold">{shopname}</p></Link>
      </div>
    </div>
  );
};

export default ProductCard;
