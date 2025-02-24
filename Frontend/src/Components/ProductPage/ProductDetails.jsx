import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductDetails } from "../../Storage/Product/productAction";
import { useParams } from "react-router-dom";


const ProductDetails = () => {
  const { product_id } = useParams();
  const [size, setSize] = useState("Large");
  const [quantity, setQuantity] = useState(1);
  const { products,loading,error } = useSelector((state) => state );

  const dispatch = useDispatch()

  
  useEffect(() => {
    dispatch(fetchProductDetails(product_id))
  }, [dispatch,product_id])

  const handleSizeChange = (selectedSize) => {
    setSize(selectedSize);
  };

  const handleQuantityChange = (change) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!products) return <p>Product not found</p>;


  return (
    <div className="flex flex-col space-y-4">
      {/* Product Name */}
      <h1 className="text-2xl font-bold">{products?.product?.name}</h1>

      {/* Rating
      <div className="flex items-center space-x-2">
        <div className="flex text-yellow-500">
          {[...Array(4)].map((_, index) => (
            <span key={index}>&#9733;</span>
          ))}
          <span className="text-gray-300">&#9733;</span>
        </div>
        <span className="text-sm text-gray-500">4.5/5</span>
      </div> */}

      {/* Price */}
      <div className="flex items-center space-x-4">
        <span className="text-xl font-bold text-black">{products?.product?.price}</span>
        <span className="text-sm text-gray-500 line-through">{products?.product?.price}</span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600">
      {products?.product.description}
      </p>

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

      {/* Add to Cart */}
      <button className="px-6 py-2 text-white rounded-md bg-blue-950">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
