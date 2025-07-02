import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

import { fetchStoreById, fetchProductsByStoreId } from "../Storage/Store/storeAction";
import { followStore } from "../Storage/Follow/followAction";

const ShopPage = () => {
  const { storeId } = useParams();
  const dispatch = useDispatch();

  const { store, loading, error } = useSelector((state) => state);
  const [isFollowed, setIsFollowed] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      Swal.fire({
        title: "Loading...",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      try {
        console.log("🔄 Fetching store and products for storeId:", storeId);
        await dispatch(fetchStoreById(storeId));
        await dispatch(fetchProductsByStoreId(storeId));
      } catch (err) {
        console.error("❌ Error fetching store/products:", err);
      } finally {
        Swal.close();
      }
    };

    fetchData();
  }, [dispatch, storeId]);

  useEffect(() => {
    if (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error || "Something went wrong.",
      });
    }
  }, [error]);

  const handleFollow = () => {
    const token = localStorage.getItem("jwt");

    if (!token) {
      Swal.fire({
        title: "Login Required",
        text: "Please log in to follow this store",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Log In",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/LoginPage";
        }
      });
      return;
    }

    console.log("🟢 User clicked follow button for storeId:", storeId);

    dispatch(followStore(storeId))
      .then(() => {
        console.log("✅ Store followed successfully");
        setIsFollowed(true);
      })
      .catch((err) => {
        console.error("❌ Follow error (frontend):", err);
        Swal.fire({
          icon: "error",
          title: "Could not follow store",
        });
      });
  };

  if (loading || !store?.store) return null;

  const { store_name, business_email, products: storeProducts = [] } = store.store;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Store Header */}
      <div className="flex items-center gap-4 p-4 border rounded-xl shadow-sm bg-white">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpyiXYQlJYE6rBuS5BqGgFtNZmDvfjF5snFw&s"
          alt={store_name}
          className="w-20 h-20 rounded-full object-cover"
        />
        <div className="flex-1">
          <h2 className="text-2xl font-semibold">{store_name}</h2>
          <p className="text-gray-500 text-sm">1.3k followers</p>
          <p className="text-gray-500 text-sm">{business_email}</p>
        </div>
        <button
          className={`px-6 py-2 rounded-lg font-medium transition duration-200 ${
            isFollowed
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-black text-white hover:bg-gray-800"
          }`}
          onClick={handleFollow}
          disabled={isFollowed}
        >
          {isFollowed ? "Followed" : "Follow"}
        </button>
      </div>

      {/* Product List */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Products</h2>
        {storeProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {storeProducts.map((product) => (
              <div
                key={product.product_id}
                className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition"
              >
                <img
                  src={product.product_image || "default-product-image.jpg"}
                  alt={product.name}
                  className="w-full h-40 object-cover mb-3 rounded"
                />
                <h3 className="text-lg font-medium">{product.name}</h3>
                <p className="text-gray-500 text-sm">{product.description}</p>
                <p className="text-xl font-bold text-black mt-2">Rs. {product.price}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No products available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default ShopPage;
