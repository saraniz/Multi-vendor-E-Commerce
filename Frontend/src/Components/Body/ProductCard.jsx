import React from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link, useRoutes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "../../Storage/Favorite/favAction";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);

  const reg_id = auth.user?.reg_id;

  console.log("reg_id:", auth.user?.reg_id); // Debug the reg_id

  const handleAddToFavorites = () => {
    if (!reg_id) {
      alert("Please log in to add favorites.");
      return;
    }
    dispatch(addFavorite(reg_id, product.product_id));
  };

  console.log("pro ", product);

  const itemName = "Red Frock";
  // const shopname="D-Mart";

  return (
    <div className="w-64 p-4 transition-all duration-300 ease-in-out rounded-lg hover:border hover:scale-105 hover:shadow-lg">
      {/* Product Image */}
      <div className="relative group">
        <Link to={`/Productpage/${product.product_id}`}>
          <img
            src={product.product_image}
            alt="Product"
            className="object-cover w-full h-40 rounded-lg cursor-pointer"
          />
        </Link>
        {/* Hoverable Name Section */}
        <div className="absolute bottom-0 left-0 w-full px-4 py-2 text-white bg-gradient-to-r from-black to-transparent opacity-0 group-hover:opacity-100">
          <p className="font-semibold">{product.name}</p>
        </div>
        {/* Icons for like and cart */}
        <div className="absolute bottom-0 right-0 flex p-2 space-x-2">
          <button onClick={handleAddToFavorites}>
            <FaHeart className="text-white cursor-pointer hover:text-red-500 transition duration-300" />
          </button>
          <button>
            <FaShoppingCart className="text-white" />
          </button>
        </div>
      </div>

      {/* Product Information */}
      <div className="mt-3">
        <Link to={"/Productpage"}>
          <a href="">
            <p className="text-gray-600 truncate">{product.description}</p>
          </a>
        </Link>
        <p className="text-xl font-bold">{`Rs.${product.price.toFixed(2)}`}</p>
      </div>

      {/* Seller Information */}
      <div className="flex items-center mt-3">
        <Link to={"/ShopHome"}>
          <img
            src={product.store_image}
            alt="Seller"
            className="w-10 h-10 rounded-full"
          />
        </Link>

        <Link to={"/ShopHome"}>
          <p className="ml-3 text-sm font-semibold">{product.store_name}</p>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
