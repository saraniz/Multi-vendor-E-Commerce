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
import { toast } from "react-toastify";

// Place Order Action
// Place Order Action
export const placeOrder = (orderData, isGuest = false) => async (dispatch) => {
  dispatch({ type: CHECKOUT_REQUEST });

  const token = localStorage.getItem("jwt");
  console.log("TOKEN: ",token)

  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    };

    // Prepare final payload
    let payload = {
      total_price: orderData.total_price,
      courier_service: orderData.courier_service,
      deliver_date: orderData.deliver_date,
      cartItems: orderData.cartItems,
    };

    // Only add guest fields if user is NOT logged in
    if (isGuest) {
      payload.guest_name = orderData.guest_name;
      payload.guest_mobile = orderData.guest_mobile;
      payload.guest_address = orderData.guest_address;
    }

    console.log("[placeOrder action] Sending order data:", payload);

    const response = await axios.post(
      `${API_BASE_URL}/api/order/placeorder`,
      payload,
      config
    );

    console.log("[placeOrder action] Response from backend:", response.data);

    dispatch({ type: CHECKOUT_SUCCESS, payload: response.data.orders });

    toast.success("Your order has been successfully placed!", {
  position: "top-right",
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "light",
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

     toast.error("Order failed!", {
  position: "top-right",
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "light",
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

     toast.error("Failed to Load Orders", {
  position: "top-right",
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "light",
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

    toast.error("Order Fetch Failed", {
  position: "top-right",
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "light",
});

   
  }
};

