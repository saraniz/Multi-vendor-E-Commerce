import axios from 'axios';
import {
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILURE,
  FETCH_CART_ITEMS,
  FETCH_CART_FAILURE,
  FETCH_CART_SUCCESS,
  REMOVE_FROM_CART_SUCCESS,
  SET_GUEST_CART_ITEMS,
  UPDATE_GUEST_CART_ITEM,
  CLEAR_GUEST_CART,
  FETCH_CART_REQUEST,
  CART_FLAG_TOGGLE, // ✅ Add this to your action types
} from './cartactionType';

import Swal from 'sweetalert2';
import { API_BASE_URL } from '../APIConfig';

export const addToCart = (product, quantity) => async (dispatch, getState) => {
  dispatch({ type: ADD_TO_CART_REQUEST });

  const token = localStorage.getItem("jwt");

  // ✅ Guest User Flow
  if (!token) {
    let guestCart = JSON.parse(sessionStorage.getItem("guestCartItems")) || [];

    const existingIndex = guestCart.findIndex(
      (item) => item.id === product.id && item.size === product.size && item.image === (product.image || product.product_image)
    );

    if (existingIndex !== -1) {
      guestCart[existingIndex].quantity += quantity;
      // Fix: also update image if missing (for old guest cart items)
      if (!guestCart[existingIndex].image && (product.image || product.product_image)) {
        guestCart[existingIndex].image = product.image || product.product_image;
      }
    } else {
      const guestItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image || product.product_image || "/placeholder.png", // only fix image logic
        description: product.description,
        size: product.size,
        quantity,
        color: product.color || "",
      };
      console.log("🧾 Guest cart item image:", product.image, product.product_image);
      console.log("🧾 Adding new guest cart item:", guestItem);
      guestCart.push(guestItem);
    }

    sessionStorage.setItem("guestCartItems", JSON.stringify(guestCart));
    dispatch({ type: SET_GUEST_CART_ITEMS, payload: guestCart });

    console.log("🛍️ Guest cart saved (final):", guestCart);

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Item added to guest cart",
      showConfirmButton: false,
      timer: 1500,
    });

    return;
  }

  // ✅ Logged-in User Flow
  try {
    const productIdInt = parseInt(product.id || product.productId, 10);
    if (isNaN(productIdInt)) throw new Error("Invalid productId.");

    const response = await axios.post(
      `${API_BASE_URL}/api/cart/add`,
      {
        productId: productIdInt,
        quantity,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Item added to cart successfully",
      showConfirmButton: false,
      timer: 1500,
    });

    dispatch({ type: ADD_TO_CART_SUCCESS, payload: response.data.cartItem });
    dispatch({ type: CART_FLAG_TOGGLE });
  } catch (error) {
    if (error.response?.status === 401) {
      localStorage.removeItem("jwt");
      window.location.href = "/LoginPage";
    }

    dispatch({
      type: ADD_TO_CART_FAILURE,
      payload: error.response?.data?.error || error.message,
    });
  }
};


export const fetchCartItems = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_CART_REQUEST });
    const token = localStorage.getItem("jwt");
    if (!token) throw new Error("User not authenticated");

    const { data } = await axios.get(`${API_BASE_URL}/api/cart/viewCart`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    dispatch({ type: FETCH_CART_SUCCESS, payload: data.cartItems });

  } catch (error) {
    dispatch({
      type: FETCH_CART_FAILURE,
      payload: error.response?.data?.message || error.message,
    });
  }
};

export const fetchGuestCartItems = () => (dispatch) => {
  const guestCartItems = JSON.parse(sessionStorage.getItem('guestCartItems')) || [];
  dispatch({
    type: SET_GUEST_CART_ITEMS,
    payload: guestCartItems,
  });
};

export const updateGuestCartItem = (id, quantity) => (dispatch, getState) => {
  const { cart } = getState();
  let newCartItems = cart.cartItems.map(item =>
    item.id === id ? { ...item, quantity } : item
  );
  newCartItems = newCartItems.filter(item => item.quantity > 0);
  sessionStorage.setItem('guestCartItems', JSON.stringify(newCartItems));

  dispatch({
    type: UPDATE_GUEST_CART_ITEM,
    payload: newCartItems,
  });
};

export const deleteFromCart = (cart_id, product_id) => async (dispatch) => {
  try {
    const token = localStorage.getItem("jwt");
    if (!token) throw new Error("User not authenticated");

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: { cart_id, product_id },
    };

    await axios.delete(`${API_BASE_URL}/api/cart/delete`, config);

    dispatch({
      type: REMOVE_FROM_CART_SUCCESS,
      payload: product_id,
    });

    dispatch({ type: CART_FLAG_TOGGLE }); // ✅ trigger re-fetch

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Item removed from cart",
      showConfirmButton: false,
      timer: 1500,
    });

  } catch (error) {
    console.error("Error removing product from cart:", error);
  }
};

export const clearGuestCart = () => (dispatch) => {
  sessionStorage.removeItem('guestCartItems');
  dispatch({ type: CLEAR_GUEST_CART });
};
