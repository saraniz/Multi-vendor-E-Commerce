import React from "react";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../Storage/Favorite/favAction";
import { addToCart, deleteFromCart } from "../../Storage/Cart/cartAction";

const ProductCard = ({ product, loading }) => {
  const dispatch = useDispatch();
  const { auth, fav, cart } = useSelector((store) => store);
  const reg_id = auth.user?.reg_id;
  const favorites = fav.favorites || [];
  const cartItems = cart.cartItems || [];

  // Normalize favorite and cart existence
  const isFavorite = favorites.some((fav) => fav.product_id === product?.product_id);
  const isInCart = cartItems.some((item) => item.productId === product?.product_id);

  const getProductImageSrc = (product) => {
    if (!product) return "/placeholder.png";
    return (
      product.imageUrl ||
      product.product_image ||
      product.image || // for guest cart items
      "/placeholder.png"
    );
  };

  const handleAddOrRemoveFavorite = () => {
    if (!product) return;
    if (!reg_id) return alert("Please log in.");
    if (isFavorite) {
      dispatch(removeFavorite(reg_id, product.product_id));
    } else {
      dispatch(addFavorite(reg_id, product.product_id));
    }
  };

  const handleAddOrRemoveFromCart = () => {
    if (!product) return;
    if (!reg_id) {
      // Guest cart logic with sessionStorage
      let guestCart = JSON.parse(sessionStorage.getItem("guestCartItems") || "[]");
      const exists = guestCart.some((item) => item.productId === product.product_id);
      if (exists) {
        guestCart = guestCart.filter((item) => item.productId !== product.product_id);
        alert("Removed from cart (guest)");
      } else {
        const imageUrl = getProductImageSrc(product);
        const cartItem = {
          productId: product.product_id,
          name: product.name,
          price: product.price,
          quantity: 1,
          image: imageUrl,
          description: product.description,
          store_id: product.store_id,
          store_name: product.store_name,
        };
        guestCart.push(cartItem);
        alert("Added to cart (guest)");
      }
      sessionStorage.setItem("guestCartItems", JSON.stringify(guestCart));
      return;
    }

    // Logged-in user cart logic (redux)
    if (isInCart) {
      const cartItem = cartItems.find((item) => item.productId === product.product_id);
      if (cartItem) dispatch(deleteFromCart(cartItem.id, product.product_id));
    } else {
      dispatch(addToCart(product.product_id, 1));
    }
  };

  if (loading || !product) {
    return (
      <div className="w-64 p-4 rounded-lg flex justify-center items-center h-80">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  const ratingPercentage = (product.rating / 5) * 100;

  return (
    <div className="w-64 p-4 rounded-lg hover:scale-105 transition-all shadow hover:shadow-lg">
      <div className="relative">
        <Link to={`/Productpage/${product.product_id}`}>
          <img
            src={getProductImageSrc(product)}
            alt={product.name}
            className="w-full h-40 object-cover rounded-lg"
          />
        </Link>

        <div className="absolute bottom-0 left-0 bg-gradient-to-r from-black to-transparent px-4 py-2 w-full text-white">
          <Link to={`/Productpage/${product.product_id}`}>
            <p className="font-semibold truncate">{product.name}</p>
          </Link>
        </div>

        <div className="absolute bottom-0 right-0 p-2 flex space-x-2">
          <button onClick={handleAddOrRemoveFavorite}>
            <FaHeart className={`text-xl ${isFavorite ? "text-red-500" : "text-white"}`} />
          </button>
          <button onClick={handleAddOrRemoveFromCart}>
            <FaShoppingCart className={`text-xl ${isInCart ? "text-blue-500" : "text-white"}`} />
          </button>
        </div>
      </div>

      <div className="mt-3">
        <p className="truncate text-gray-600">{product.description}</p>
        <p className="text-xl font-bold">Rs.{product.price}.00</p>
      </div>

      <div className="flex items-center mt-2 space-x-2">
        <div className="relative w-24 h-5">
          <div className="absolute flex w-full text-gray-300">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
          <div
            className="absolute top-0 left-0 flex overflow-hidden text-yellow-500"
            style={{ width: `${ratingPercentage}%` }}
          >
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
        </div>
        <span className="text-sm text-gray-600">{product.totalRatings}</span>
      </div>

      <div className="flex items-center mt-3">
        <Link to={`/store/${product.store_id}`}>
          <img src={product.store_image} alt="Seller" className="w-10 h-10 rounded-full" />
        </Link>
        <Link to={`/store/${product.store_id}`}>
          <p className="ml-3 text-sm font-semibold">{product.store_name}</p>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;