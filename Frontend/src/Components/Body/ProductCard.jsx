import React from "react";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "../../Storage/Favorite/favAction";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);
  const reg_id = auth.user?.reg_id;

  console.log("reg_id:", reg_id); // Debugging reg_id
  console.log("Product:", product); // Debugging product data

  const handleAddToFavorites = () => {
    if (!reg_id) {
      alert("Please log in to add favorites.");
      return;
    }
    dispatch(addFavorite(reg_id, product.product_id));
  };

  // Calculate rating percentage
  const ratingPercentage = (product.rating / 5) * 100;

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
        <Link to={`/Productpage/${product.product_id}`}>
          <p className="font-semibold">{product.name}</p>
          </Link>
        </div>

        {/* Icons for like and cart */}
        <div className="absolute bottom-0 right-0 flex p-2 space-x-2">
          <button onClick={handleAddToFavorites}>
            <FaHeart className="text-white transition duration-300 cursor-pointer hover:text-red-500" />
          </button>
          <button>
            <FaShoppingCart className="text-white" />
          </button>
        </div>
      </div>

      {/* Product Information */}
      <div className="mt-3">
      
          <p className="text-gray-600 truncate">{product.description}</p>
        
        <p className="text-xl font-bold">Rs.{product.price}.00</p>
      </div>

      {/* Star Rating Display */}
      <div className="flex items-center mt-2 space-x-2">
        <div className="relative w-24 h-5">
          <div className="absolute flex w-full text-gray-300">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} />
            ))}
          </div>
          <div
            className="absolute top-0 left-0 flex overflow-hidden text-yellow-500"
            style={{ width: `${ratingPercentage}%` }}
          >
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} />
            ))}
          </div>
        </div>
        <span className="text-sm text-gray-600">{product.totalRatings} </span>
      </div>

      {/* Seller Information */}
      <div className="flex items-center mt-3">
        <Link to={"/ShopHome"}>
          <img src={product.store_image} alt="Seller" className="w-10 h-10 rounded-full" />
        </Link>
        <Link to={"/ShopHome"}>
          <p className="ml-3 text-sm font-semibold">{product.store_name}</p>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;