import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductDetails } from "../../Storage/Product/productAction";
import { useParams, useNavigate } from "react-router-dom";
import { addToCart } from "../../Storage/Cart/cartAction";
import loadingAnimation from "../Loading/loadingAnimation";
import { HiOutlineShoppingCart, HiOutlineShoppingBag } from "react-icons/hi";
import StarRating from "../Body/StarRating";

const ProductDetails = () => {
  const { product_id } = useParams();
  const [size, setSize] = useState("Large");
  const [quantity, setQuantity] = useState(1);
  const { products, error } = useSelector((state) => state);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        await dispatch(fetchProductDetails(product_id));
        setLoading(false);
      } catch (error) {
        console.error("❌ Error fetching product details:", error);
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

  const buildProductObject = () => {
    const product = products?.product || {};
    const builtProduct = {
      id: product_id,
      name: product.name,
      price: product.price,
      image: product.product_image || product.image || "/placeholder.png",
      description: product.description,
      size: size,
      color: product.color || "", // <-- add color property
    };
    console.log("🧾 buildProductObject:", builtProduct);
    return builtProduct;
  };

  const handleAddToCart = () => {
    const product = buildProductObject();
    if (!product.id) {
      console.error("❗ Product ID is missing. Cannot add to cart.");
      return;
    }
    dispatch(addToCart(product, quantity));
    console.log("🛒 Product added to cart:", product, "Qty:", quantity);
  };

  const handleBuyNow = () => {
    const product = buildProductObject();
    if (!product.id) {
      console.error("❗ Product ID is missing. Cannot proceed to buy.");
      return;
    }
    dispatch(addToCart(product, quantity));
    console.log("🛍️ Buy Now clicked. Navigating to cart with:", product, "Qty:", quantity);
    navigate("/Cartpage");
  };

  if (loading) return <loadingAnimation />;
  if (error) return <p>Error: {error}</p>;
  if (!products || !products.product) return <p>Product not found</p>;

  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-2xl font-bold">{products?.product?.name}</h1>

      <StarRating
        currentRating={products?.product?.rating}
        onRate={(newRating) => console.log("New rating:", newRating)}
      />

      <div className="flex items-center space-x-4">
        <span className="text-xl font-bold text-black">
          {`Rs.${products?.product?.price?.toFixed(2)}`}
        </span>
      </div>

      <p className="text-sm text-gray-600">{products?.product?.description}</p>

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

      <div className="flex space-x-4">
        <button
          className="px-6 py-2 text-white rounded-md bg-blue-950 hover:bg-blue-800 flex items-center justify-center space-x-2"
          onClick={handleAddToCart}
        >
          <HiOutlineShoppingCart size={20} />
          <span>Add to Cart</span>
        </button>

        <button
          className="px-6 py-2 text-white rounded-md bg-blue-950 hover:bg-blue-800 flex items-center justify-center space-x-2"
          onClick={handleBuyNow}
        >
          <HiOutlineShoppingBag size={20} />
          <span>Buy Now</span>
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
