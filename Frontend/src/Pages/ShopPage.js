import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStoreById, fetchProductsByStoreId } from "../Storage/Store/storeAction";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { followStore } from '../Storage/Follow/followAction'; // Ensure correct import path for the follow action


const ShopPage = () => {
  const { storeId } = useParams();
  const dispatch = useDispatch();

  // Accessing store and products state from Redux
  const { store, products = [], loading, error } = useSelector((state) => state);

  console.log("Store:", store);


  // Fetch store data by storeId
  useEffect(() => {
    Swal.fire({
      title: 'Loading...',
      text: 'Please wait while we fetch the store data.',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    dispatch(fetchStoreById(storeId));  // Fetch store data
    dispatch(fetchProductsByStoreId(storeId));  // Fetch products data for the store
  }, [dispatch, storeId]);

  // Close the loading spinner once data is fetched
  useEffect(() => {
    if (!loading) {
      Swal.close();
    }
  }, [loading]);

  // Show error alert if there's any error
  useEffect(() => {
    if (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error || 'Something went wrong, please try again.',
      });
    }
  }, [error]);

  const handleFollow = () => {
    // Check if user is logged in
    const token = localStorage.getItem('jwt');
    if (!token) {
      Swal.fire({
        title: "Please log in to follow this store",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/LoginPage"; // Redirect to login page
        }
      });
      return;
    }

    // Dispatch follow action
    dispatch(followStore(storeId));
  };

  if (loading || !store) {
    return null; // You can return a loading spinner here if you prefer
  }

  return (
    <div className="p-6">
      {/* Store Profile Header */}
      <div className='flex justify-center'>
        <div className="flex items-center p-4 max-w-7xl">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpyiXYQlJYE6rBuS5BqGgFtNZmDvfjF5snFw&s"          
            alt={store?.store_name || "Store"}
            className="w-20 h-20 rounded-full"
          />
          <div className="ml-4">
            <h2 className="text-xl font-semibold">{store?.store?.store_name}</h2>
            <p className="text-sm text-gray-500">1.3k followers</p>
            <p className="text-gray-500 text-sm">{store?.store?.business_email}</p>
          </div>
        </div>
      </div>

      {/* Follow Button */}
      <div className="ml-auto">
          <button
            className="px-8 py-1 font-semibold text-white bg-black rounded-lg hover:bg-gray-800"
            onClick={handleFollow}
            disabled={loading}
          >
            {loading ? 'Following...' : 'Follow'}
          </button>
        </div>

      {/* Product Listing Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
          {store.store?.products.length > 0 ? (
            store.store?.products.map((product) => (
              <div key={product.product_id} className="border p-4 rounded-lg">
                <img
                  src={product.product_image || "default-product-image.jpg"}
                  alt={product.name}
                  className="object-cover w-full h-40 mb-4"
                />
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-500">{product.description}</p>
                <p className="text-xl font-bold mt-2">Rs. {product.price}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No products available at the moment.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
