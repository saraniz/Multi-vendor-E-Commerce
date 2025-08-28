import { api, API_BASE_URL } from "../APIConfig";
import {
  STORE_FETCH_REQUEST,
  STORE_FETCH_SUCCESS,
  STORE_FETCH_FAILURE,
  PRODUCT_FETCH_REQUEST,
  PRODUCT_FETCH_SUCCESS,
  PRODUCT_FETCH_FAILURE,
  SELLER_PRODUCTS_FETCH_REQUEST,
  SELLER_PRODUCTS_FETCH_SUCCESS,
  SELLER_PRODUCTS_FETCH_FAILURE,
  ORDER_COUNTS_REQUEST,
  ORDER_COUNTS_SUCCESS,
  ORDER_COUNTS_FAILURE,
  SELLER_ALL_PRODUCTS_FETCH_REQUEST,
  SELLER_ALL_PRODUCTS_FETCH_SUCCESS,
  SELLER_ALL_PRODUCTS_FETCH_FAILURE,
} from "./storeActionType";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

// Fetch store by store_id
export const fetchStoreById = (store_id) => async (dispatch) => {
  try {
    console.log("sid_", store_id);
    dispatch({ type: STORE_FETCH_REQUEST });

    const { data } = await axios.get(`${API_BASE_URL}/api/store/fetchstore/${store_id}`);
    console.log("sdata_", data);
    dispatch({
      type: STORE_FETCH_SUCCESS,
      payload: data,
    });

    return data;
  } catch (error) {
    console.error("Fetch store error:", error);

     toast.error("Failed to load store", {
  position: "top-right",
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "light",
});



    dispatch({
      type: STORE_FETCH_FAILURE,
      payload: error.response?.data?.error || error.message,
    });

    throw error;
  }
};

// Fetch products based on store ID
export const fetchProductsByStoreId = (storeId) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_FETCH_REQUEST });

    const { data } = await axios.get(`${API_BASE_URL}/api/store/fetchproducts/${storeId}`);
    console.log("Fetched products:", data); // Debug: Log fetched products

    dispatch({
      type: PRODUCT_FETCH_SUCCESS,
      payload: data.products,
    });

    return data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
    dispatch({
      type: PRODUCT_FETCH_FAILURE,
      payload: error.message,
    });
    throw error;
  }
};

export const fetchSellerProducts = () => async (dispatch) => {
  try {
    dispatch({ type: SELLER_PRODUCTS_FETCH_REQUEST });

    const token = localStorage.getItem("jwt");
    if (!token) {
      throw new Error("No token found in localStorage, user might not be logged in.");
    }

    console.log("📦 [Action] Fetching seller products with token:", token);

    const { data } = await axios.get(`${API_BASE_URL}/api/store/fetchstoreproducts`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("📦 [Action] Seller products fetched successfully:", data.products);

    dispatch({
      type: SELLER_PRODUCTS_FETCH_SUCCESS,
      payload: data.products,
    });

    return data.products;
  } catch (error) {
    console.error("❌ [Action] Fetch seller products error:", error);

    Swal.fire({
      icon: "error",
      title: "Failed to load seller products",
      text: error.response?.data?.message || error.message,
    });

    dispatch({
      type: SELLER_PRODUCTS_FETCH_FAILURE,
      payload: error.response?.data?.message || error.message,
    });

    throw error;
  }
};

export const fetchOrdersForStore = () => async (dispatch) => {
  try {
    dispatch({ type: ORDER_COUNTS_REQUEST });

    const token = localStorage.getItem("jwt");
    if (!token) throw new Error("No token found, please login first.");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get(`${API_BASE_URL}/api/store/getordersforstore`, config);
    console.log("[fetchOrdersForStore] API response:", data); // Debug: log full response

    dispatch({
      type: ORDER_COUNTS_SUCCESS,
      payload: {
        shipped: data.counts.shipped,
        pending: data.counts.pending,
        new: data.counts.new,
      },
    });

    return data;
  } catch (error) {
    dispatch({
      type: ORDER_COUNTS_FAILURE,
      payload: error.response?.data?.message || error.message,
    });

    Swal.fire({
      icon: "error",
      title: "Failed to Fetch Orders",
      text: error.response?.data?.message || error.message,
    });

    throw error;
  }
};

export const cancelOrderBySeller = (orderId) => async (dispatch) => {
  try {
    const token = localStorage.getItem("jwt");
    if (!token) {
      throw new Error("No token found. Please login again.");
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.put(`${API_BASE_URL}/api/store/cancel/${orderId}`, {}, config);

    Swal.fire({
      icon: "success",
      title: "Order Cancelled",
      text: data.message,
    });

    // Optionally: dispatch an action to refresh orders here
    // dispatch(fetchOrdersForStore());
  } catch (error) {
    console.error("❌ Cancel Order Error:", error);

    Swal.fire({
      icon: "error",
      title: "Cancel Failed",
      text: error.response?.data?.message || error.message,
    });

    throw error;
  }
};

export const fetchStoreDetails = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("jwt");

    if (!token) {
      throw new Error("No authentication token found. Please login.");
    }

    const { data } = await axios.get(`${API_BASE_URL}/api/store/storedetails`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("Store details fetched:", data);

    dispatch({
      type: STORE_FETCH_SUCCESS,
      payload: data.storeDetails,
    });

    return data.storeDetails;
  } catch (error) {
    console.error("❌ Fetch store details error:", error.message || error);

    dispatch({
      type: STORE_FETCH_FAILURE,
      payload: error.response?.data?.message || error.message,
    });

    Swal.fire({
      title: "Error fetching store details",
      text: error.response?.data?.message || error.message,
      icon: "error",
    });

    throw error;
  }
};

export const updateStoreDetails = (formData) => async (dispatch) => {
  try {
    const token = localStorage.getItem("jwt");
    if (!token) throw new Error("No authentication token found. Please login.");

    let payload;
    let headers = {
      Authorization: `Bearer ${token}`,
    };
    if (formData.store_image && formData.store_image instanceof File) {
      payload = new FormData();
      payload.append('store_name', formData.store_name);
      payload.append('business_email', formData.business_email);
      payload.append('business_regNo', formData.business_regNo);
      payload.append('business_address', formData.business_address);
      payload.append('store_image', formData.store_image);
      // Content-Type will be set automatically by browser for FormData
    } else {
      payload = {
        store_name: formData.store_name,
        business_email: formData.business_email,
        business_regNo: formData.business_regNo,
        business_address: formData.business_address,
        store_image: formData.store_image,
      };
      headers['Content-Type'] = 'application/json';
    }

    const { data } = await axios.put(`${API_BASE_URL}/api/store/update`, payload, { headers });
    Swal.fire({
      icon: "success",
      title: "Store updated successfully!",
      timer: 1500,
      showConfirmButton: false,
    });
    dispatch({
      type: STORE_FETCH_SUCCESS,
      payload: data.storeDetails,
    });
    return data.storeDetails;
  } catch (error) {
    console.error("❌ Update store details error:", error.message || error);
    Swal.fire({
      icon: "error",
      title: "Update Failed",
      text: error.response?.data?.message || error.message,
    });
    throw error;
  }
};

// Fetch all products of the logged-in seller
export const fetchSellerAllProducts = () => async (dispatch) => {
  dispatch({ type: SELLER_ALL_PRODUCTS_FETCH_REQUEST });
  console.log("[fetchSellerAllProducts] Action started");

  try {
    const token = localStorage.getItem("jwt");
    const headers = { Authorization: `Bearer ${token}` };

    const { data } = await axios.get(`${API_BASE_URL}/api/items/my-products`, { headers });

    if (data.success) {
      dispatch({
        type: SELLER_ALL_PRODUCTS_FETCH_SUCCESS,
        payload: data.products,
      });
      console.log("[fetchSellerAllProducts] Products fetched:", data.products);
    } else {
      dispatch({
        type: SELLER_ALL_PRODUCTS_FETCH_FAILURE,
        payload: data.message,
      });
      console.warn(
        "[fetchSellerAllProducts] Backend returned failure:",
        data.message
      );
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || error.message || "Something went wrong!";
    dispatch({
      type: SELLER_ALL_PRODUCTS_FETCH_FAILURE,
      payload: errorMessage,
    });
    console.error("[fetchSellerAllProducts] Error:", error);
    Swal.fire({
      icon: "error",
      title: "Failed to fetch products",
      text: errorMessage,
    });
  }
};