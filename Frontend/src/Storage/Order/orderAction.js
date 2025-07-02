import axios from "axios";
import Swal from "sweetalert2";
import {
  CHECKOUT_REQUEST,
  CHECKOUT_SUCCESS,
  CHECKOUT_FAIL,
  FETCH_ORDERS_REQUEST,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_FAIL,
  FETCH_SELLER_ORDERS_REQUEST,
  FETCH_SELLER_ORDERS_SUCCESS,
  FETCH_SELLER_ORDERS_FAILURE
} from "./orderActionType";
import { API_BASE_URL } from "../APIConfig";

// Place Order Action
export const placeOrder = (orderData) => async (dispatch) => {
  dispatch({ type: CHECKOUT_REQUEST });

  const token = localStorage.getItem("jwt");

  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    };

    console.log("[placeOrder action] Sending order data:", orderData);

    const response = await axios.post(
      `${API_BASE_URL}/api/order/placeorder`,
      orderData,
      config
    );

    console.log("[placeOrder action] Response from backend:", response.data);

    // ✅ FIX: dispatch orders array instead of undefined .order
    dispatch({ type: CHECKOUT_SUCCESS, payload: response.data.orders });

    Swal.fire({
      icon: "success",
      title: "Order Placed",
      text: "Your order has been successfully placed!",
      timer: 2000,
      showConfirmButton: false,
    });

    // Clear cart from sessionStorage
    sessionStorage.removeItem("cartItems");
    sessionStorage.removeItem("guestCartItems");

  } catch (error) {
    console.error("[placeOrder action] Error:", error);

    if (error.response?.status === 401) {
      localStorage.removeItem("jwt");
      window.location.href = "/LoginPage";
    }

    dispatch({
      type: CHECKOUT_FAIL,
      payload: error.response?.data?.message || error.message,
    });

    Swal.fire({
      icon: "error",
      title: "Order Failed",
      text: error.response?.data?.message || "Something went wrong!",
    });

    throw error;
  }
};

// Fetch Orders by User
export const fetchOrdersByUser = () => async (dispatch) => {
  dispatch({ type: FETCH_ORDERS_REQUEST });

  const token = localStorage.getItem("jwt");

  try {
    const config = {
      headers: {
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    };

    const response = await axios.get(
      `${API_BASE_URL}/api/order/getorders`,
      config
    );

    console.log("[fetchOrdersByUser] Response from backend:", response.data);
    console.log("[fetchOrdersByUser] Orders received in action:", response.data.orders);

    dispatch({
      type: FETCH_ORDERS_SUCCESS,
      payload: response.data.orders,
    });

  } catch (error) {
    console.error("[fetchOrdersByUser] Error:", error);

    if (error.response?.status === 401) {
      localStorage.removeItem("jwt");
      window.location.href = "/LoginPage";
    }

    dispatch({
      type: FETCH_ORDERS_FAIL,
      payload: error.response?.data?.message || error.message,
    });

    Swal.fire({
      icon: "error",
      title: "Failed to Load Orders",
      text: error.response?.data?.message || "Something went wrong!",
    });
  }
};

export const fetchOrdersForSellerStore = () => async (dispatch) => {
  dispatch({ type: FETCH_SELLER_ORDERS_REQUEST });

  const token = localStorage.getItem("jwt");

  try {
    const config = {
      headers: {
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    };

    const res = await axios.get(`${API_BASE_URL}/api/order/getsellerorders`, config);

    dispatch({
      type: FETCH_SELLER_ORDERS_SUCCESS,
      payload: res.data.orders,
    });

  } catch (error) {
    console.error("fetchOrdersForSellerStore Error:", error);

    dispatch({
      type: FETCH_SELLER_ORDERS_FAILURE,
      payload: error.response?.data?.message || error.message,
    });

    Swal.fire({
      icon: "error",
      title: "Order Fetch Failed",
      text: error.response?.data?.message || "Unable to fetch store orders.",
    });
  }
};

