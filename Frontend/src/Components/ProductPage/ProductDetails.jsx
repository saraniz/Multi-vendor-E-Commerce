import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductDetails } from "../../Storage/Product/productAction";
import { useParams, Link } from "react-router-dom";
import { addToCart } from "../../Storage/Cart/cartAction"; // Ensure correct path
import loadingAnimation from "../Loading/loadingAnimation";
import { HiOutlineShoppingCart, HiOutlineShoppingBag } from "react-icons/hi"; // Import icons from react-icons/hi
import StarRating from "../Body/StarRating"; // Assuming StarRating is a custom component

const ProductDetails = () => {
  const { product_id } = useParams();
  const [size, setSize] = useState("Large");
  const [quantity, setQuantity] = useState(1);
  const { products, error } = useSelector((state) => state);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        await dispatch(fetchProductDetails(product_id));
        setLoading(false); // Assuming fetchProductDetails is an async action
      } catch (error) {
        console.error("Error fetching product details:", error);
        setLoading(false);
      }
    };

    getProducts();
  }, [dispatch, product_id]);

  const handleSizeChange = (selectedSize) => {
    setSize(selectedSize);
  };

  const handleQuantityChange = (change) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product_id, quantity, size));
  };

  if (loading) return <loadingAnimation />;
  if (error) return <p>Error: {error}</p>;
  if (!products || !products.product) return <p>Product not found</p>;

  return (
    <div className="flex flex-col space-y-4">
      {/* Product Name */}
      <h1 className="text-2xl font-bold">{products?.product?.name}</h1>

      {/* Star Rating */}
      <StarRating
        currentRating={products?.product?.rating}
        onRate={(newRating) => console.log("New rating:", newRating)}
      />

      {/* Price */}
      <div className="flex items-center space-x-4">
        <span className="text-xl font-bold text-black">
          {`Rs.${products?.product?.price.toFixed(2)}`}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600">{products?.product.description}</p>

      {/* Size Selection */}
      <div>
        <h3 className="font-semibold">Choose Size</h3>
        <div className="flex mt-2 space-x-4">
          {["Small", "Medium", "Large", "X-Large"].map((sizeOption) => (
            <button
              key={sizeOption}
              className={`px-4 py-2 border rounded-md ${
                size === sizeOption ? "bg-blue-950 text-white" : "bg-gray-200"
              }`}
              onClick={() => handleSizeChange(sizeOption)}
            >
              {sizeOption}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity Selection */}
      <div className="flex items-center space-x-4">
        <h3 className="font-semibold">Quantity</h3>
        <div className="flex items-center space-x-2">
          <button
            className="px-4 py-2 bg-gray-200 rounded-md"
            onClick={() => handleQuantityChange(-1)}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            className="px-4 py-2 bg-gray-200 rounded-md"
            onClick={() => handleQuantityChange(1)}
          >
            +
          </button>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button
          className="px-6 py-2 text-white rounded-md bg-blue-950 hover:bg-blue-800 flex items-center justify-center space-x-2"
          onClick={handleAddToCart}
        >
          <HiOutlineShoppingCart size={20} /> {/* Larger Shopping Cart Icon */}
          <span>Add to Cart</span>
        </button>

        <Link to="/PaymentMethods">
          <button className="px-6 py-2 text-white rounded-md bg-blue-950 hover:bg-blue-800 flex items-center justify-center space-x-2">
            <HiOutlineShoppingBag size={20} /> {/* Larger Shopping Bag Icon */}
            <span>Buy Now</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
