import React from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { Link, useRoutes } from "react-router-dom";

const ProductCard = ({product}) => {

console.log("pro ",product)


  const itemName="Red Frock";
  // const shopname="D-Mart";

  return (
    <div className="w-64 p-4 transition-all duration-300 ease-in-out rounded-lg hover:border hover:scale-105 hover:shadow-lg">
      {/* Product Image */}
      <div className="relative">
      <Link to={`/Productpage/${product.product_id}`}>
        <img
          src={product.product_image}
          alt="Product"
          className="object-cover w-full h-40 rounded-lg cursor-pointer"
        />
    </Link>
        <div className="absolute bottom-0 left-0 w-full px-4 py-2 text-white bg-gradient-to-r from-black to-transparent">
          <p className="font-semibold">{product.name}</p>
        </div>
        {/* Icons for like and cart */}
        <div className="absolute bottom-0 right-0 flex p-2 space-x-2">
          <button className=''><FaHeart className="text-white" /></button>
          <button className=''><FaShoppingCart className="text-white" /></button>
        </div>
      </div>

      {/* Product Information */}
      <div className="mt-3">
      <Link to={'/Productpage'}><a href=''><p className="text-gray-600 truncate">{product.description}</p></a></Link>
        <p className="text-xl font-bold">{product.price}</p>
      </div>
      

      {/* Seller Information */}
      <div className="flex items-center mt-3">
        
        <Link to={'/ShopHome'}><img
          src={product.store_image}
          alt="Seller"
          className="w-10 h-10 rounded-full"
        /></Link>

        <Link to={'/ShopHome'}><p className="ml-3 text-sm font-semibold">{product.store_name}</p></Link>
      </div>
    </div>
  );
};

export default ProductCard;
