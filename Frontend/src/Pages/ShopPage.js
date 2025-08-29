import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Components/Header/Navbar";
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
    <div>
      <Navbar />
      <div className="p-6 mx-auto max-w-7xl">
        {/* Store Header */}
        <div className="flex items-center gap-4 p-4 bg-white border shadow-sm rounded-xl">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpyiXYQlJYE6rBuS5BqGgFtNZmDvfjF5snFw&s"
            alt={store_name}
            className="object-cover w-20 h-20 rounded-full"
          />
          <div className="flex-1">
            <h2 className="text-2xl font-semibold">{store_name}</h2>
            <p className="text-sm text-gray-500">1.3k followers</p>
            <p className="text-sm text-gray-500">{business_email}</p>
          </div>
          <button
            className={`px-6 py-2 rounded-lg font-medium transition duration-200 ${isFollowed
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
          <h2 className="mb-4 text-xl font-semibold">Products</h2>
          {storeProducts.length > 0 ? (
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
              {storeProducts.map((product) => (
                <div
                  key={product.product_id}
                  className="p-4 transition bg-white border rounded-lg shadow-sm hover:shadow-md"
                >
                  <img
                    src={product.product_image || "default-product-image.jpg"}
                    alt={product.name}
                    className="object-cover w-full h-40 mb-3 rounded"
                  />
                  <h3 className="text-lg font-medium">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.description}</p>
                  <p className="mt-2 text-xl font-bold text-black">Rs. {product.price}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No products available at the moment.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
