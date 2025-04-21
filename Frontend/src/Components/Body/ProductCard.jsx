import React, { useEffect } from "react";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../Storage/Favorite/favAction";
import { addToCart, deleteFromCart, fetchCartItems } from "../../Storage/Cart/cartAction";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { auth, fav, cart } = useSelector((store) => store);
  const reg_id = auth.user?.reg_id;
  const favorites = fav.favorites || [];
  const cartItems = cart.cartItems || [];

  // Check if the product is in favorites
  const isFavorite = favorites.some(
    (favItem) => favItem.product_id === product.product_id
  );

  // Check if the product is in the cart
  const isInCart = cartItems.some(
    (cartItem) => cartItem.productId === product.product_id
  );

  // Handle adding/removing from favorites
  const handleAddOrRemoveFavorite = () => {
    if (!reg_id) {
      alert("Please log in to manage favorites.");
      return;
    }

    if (isFavorite) {
      dispatch(removeFavorite(reg_id, product.product_id));
    } else {
      dispatch(addFavorite(reg_id, product.product_id));
    }
  };

  // Handle adding/removing from cart
  const handleAddOrRemoveFromCart = () => {
    if (!reg_id) {
      alert("Please log in to add items to your cart.");
      return;
    }

    if (isInCart) {
      // Find the cart item to get its cart_id
      const cartItem = cartItems.find(
        (item) => item.productId === product.product_id
      );
      if (cartItem) {
        dispatch(deleteFromCart(cartItem.id, product.product_id));
      }
    } else {
      dispatch(addToCart(product.product_id, 1)); // Add with quantity 1
    }
  };

  // Fetch cart items on component mount if user is logged in
  useEffect(() => {
    if (reg_id) {
      dispatch(fetchCartItems());
    }
  }, [dispatch, reg_id]);

  // Calculate the rating percentage for the star rating bar
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

        {/* Favorite and Cart Icons */}
        <div className="absolute bottom-0 right-0 flex p-2 space-x-2">
          <button onClick={handleAddOrRemoveFavorite}>
            <FaHeart
              className={`text-xl ${isFavorite ? "text-red-500" : "text-white"}`}
            />
          </button>
          <button onClick={handleAddOrRemoveFromCart}>
            <FaShoppingCart
              className={`text-xl ${isInCart ? "text-blue-500" : "text-white"}`}
            />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-3">
        <p className="text-gray-600 truncate">{product.description}</p>
        <p className="text-xl font-bold">Rs.{product.price}.00</p>
      </div>

      {/* Star Rating */}
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
        <span className="text-sm text-gray-600">{product.totalRatings}</span>
      </div>

      {/* Seller Information */}
      <div className="flex items-center mt-3">
        <Link to={`/store/${product.store_id}`}>
          <img
            src={product.store_image}
            alt="Seller"
            className="w-10 h-10 rounded-full"
          />
        </Link>
        <Link to={`/store/${product.store_id}`}>
          <p className="ml-3 text-sm font-semibold">{product.store_name}</p>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;